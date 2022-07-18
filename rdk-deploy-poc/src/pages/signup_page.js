import React from 'react';
import Layout from '@theme/Layout';
import SignInSide from "@site/src/components/SignInSignUp";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <SignInSide />
      <main>
      </main>
    </Layout>
  );
}
