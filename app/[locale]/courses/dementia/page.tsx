import React from 'react';
import { useTranslation } from '../../../i18n';
import ServerPageHeader from '../../../components/ServerPageHeader';
import AnimatedSection from '../../../components/AnimatedSection';
import ButtonLink from '../../../components/ButtonLink';
import CallToAction from '../../../components/CallToAction';
import Image from 'next/image';
import Link from 'next/link';

export default async function DementiaCoursePage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslation(locale, 'courses');

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <ServerPageHeader
        title={t('course_dementia_title')}
        subtitle={t('course_dementia_desc')}
        backgroundImage="/images/headers/courses-header.png"
      />
      
      {/* Course Details Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Course Content */}
            <div className="lg:w-2/3">
              <AnimatedSection animation="fade-in-up" className="mb-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Course Overview</h2>
                <p className="text-lg text-gray-600 mb-4">
                  This comprehensive course on understanding dementia provides essential knowledge and practical skills for students living with seniors who might be experiencing cognitive decline. Through interactive lessons and case studies, you'll gain confidence in recognizing signs of dementia and adapting your communication approaches.
                </p>
                <p className="text-lg text-gray-600">
                  The course covers different types of dementia, including Alzheimer's disease, vascular dementia, and Lewy body dementia, explaining how each affects the brain and behavior differently. You'll learn compassionate communication techniques that preserve dignity and build connection.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">What You'll Learn</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>How to recognize early signs and symptoms of different types of dementia</li>
                  <li>Effective communication strategies for connecting with someone experiencing memory loss</li>
                  <li>Managing challenging behaviors with patience and understanding</li>
                  <li>Creating a supportive living environment that promotes independence</li>
                  <li>Self-care practices for caregivers and companions</li>
                  <li>Resources for additional support when needed</li>
                </ul>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Course Structure</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <h4 className="font-semibold text-lg">Module 1: Understanding Dementia Fundamentals</h4>
                    <p className="text-gray-600">The science of memory loss, types of dementia, and how they progress</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <h4 className="font-semibold text-lg">Module 2: Communication Techniques</h4>
                    <p className="text-gray-600">Verbal and non-verbal approaches that foster connection and understanding</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <h4 className="font-semibold text-lg">Module 3: Creating a Supportive Environment</h4>
                    <p className="text-gray-600">Physical adaptations and routine adjustments that promote safety and comfort</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <h4 className="font-semibold text-lg">Module 4: Responding to Challenging Situations</h4>
                    <p className="text-gray-600">Strategies for managing sundowning, repetitive questions, and emotional moments</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white border rounded-xl shadow-sm p-6 sticky top-24">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                      <Image src="/icons/courses/brain.svg" width={24} height={24} alt="" />
                    </div>
                    <h3 className="text-xl font-bold">{t('course_dementia_title')}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{t('course_dementia_duration')}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{t('certificate')}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                      <span>Online & self-paced</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-gray-600">{t('free_course')}</span>
                    <span className="line-through text-gray-400">€49</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{t('donation_welcome')}</p>
                  
                  <ButtonLink href="#enroll" variant="primary" className="w-full mb-3">
                    {t('enroll')}
                  </ButtonLink>
                  
                  <button className="w-full flex items-center justify-center text-primary-600 hover:text-primary-700 border border-primary-200 hover:border-primary-300 rounded-md py-2 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Save for later
                  </button>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Share this course</h4>
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instructor Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">About the Instructor</h2>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="rounded-full overflow-hidden w-32 h-32">
                <Image src="/images/courses/instructor.png" width={128} height={128} alt="Course Instructor" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dr. Maria van der Berg</h3>
                <p className="text-gray-600 mb-4">Specialist in Geriatric Psychology with over 15 years of experience working with seniors experiencing cognitive decline. Dr. van der Berg combines clinical expertise with practical household strategies to help students create meaningful connections with their senior housemates.</p>
                <p className="text-gray-600">She has developed this course specifically for SamenWonen participants to build confidence and skills for successful intergenerational living.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Call To Action */}
      <div id="enroll" className="scroll-mt-20">
        <CallToAction
          title="Ready to Start Learning?"
          subtitle="Enroll in this free course today and gain valuable skills for working with seniors with dementia."
          buttonText={t('enroll')}
          buttonLink="#"
          variant="gradient"
          shape="rounded"
          withPattern={true}
        />
      </div>
    </div>
  );
}
