"use client";

import '../globals.css'
import { ThemeProvider } from "next-themes";
import Header from '@/components/Header';
import Lines from '@/components/Lines';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';


interface OriginalComponentProps {
  botAvatar: string;
  floating: boolean;
  headerTitle: string;
  recognitionEnable: boolean;
  steps: ({ id: string; message: string; trigger: string; } |
  { id: string; user: boolean; trigger: string; } |
  { id: string; options: { value: string; label: string; trigger: string; }[]; } |
  { id: string; component: JSX.Element; } |
  { id: string; message: string; end: boolean; }
  )[];
}

const ChatBot = dynamic<OriginalComponentProps>(() => import("react-simple-chatbot").then(mod => mod.default), { ssr: false });

interface FileWithPreview extends File {
  preview: string;
}

import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

const thumbsContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb: React.CSSProperties = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner: React.CSSProperties = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function Previews(props: any) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <Image
          src={file.preview}
          style={img}
          onLoad={() => { URL.revokeObjectURL(file.preview); } } alt={''}        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}

const config = {
  botAvatar: "/images/icon/img.jpg",
  floating: true,
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="eng">
      <body className={`dark:bg-black`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          {children}
          <ChatBot
            headerTitle="ChatBot"
            recognitionEnable={true}
            steps={[
              {
                id: '1',
                message: 'What is your name?',
                trigger: 'name',
              },
              {
                id: 'name',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hi {previousValue}! What is you want?',
                trigger: 'detection',
              },
              {
                id: 'detection',
                options: [
                  { value: 'object_detection', label: 'Object', trigger: 'update' },
                  { value: 'predestrian_detection', label: 'Predestrain', trigger: 'update' },
                ],
              },
              {
                id: 'update',
                message: 'Would you like to change decision?',
                trigger: 'change_decision',
              },
              {
                id: 'change_decision',
                options: [
                  { value: 'yes', label: 'Yes', trigger: 'change-yes' },
                  { value: 'no', label: 'No', trigger: 'image-upload' },
                ],
              },
              {
                id: 'change-yes',
                message: 'What field would you like to update?',
                trigger: 'detection',
              },
              {
                id: 'image-upload',
                component: (
                  <Previews />
                ),

              },
              {
                id: 'end-message',
                message: 'Thanks! Your data was submitted successfully!',
                end: true,
              },
            ]}
            {...config}
          />
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
