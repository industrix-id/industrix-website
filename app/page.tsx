'use client'

import React from 'react'
import { Layout } from 'antd'
import HeroSection from '@/components/HeroSection'
import CaseStudiesSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const { Content } = Layout

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="projects">
          <CaseStudiesSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </Content>
      <Footer />
    </Layout>
  )
}