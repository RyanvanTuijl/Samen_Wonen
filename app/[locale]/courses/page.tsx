import React from 'react';
import { useTranslation } from '../../i18n';
import ServerPageHeader from '../../components/ServerPageHeader';
import AnimatedSection from '../../components/AnimatedSection';
import CourseCard from '../../components/CourseCard';
import CallToAction from '../../components/CallToAction';

export default async function CoursesPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslation(locale, 'courses');

  // Define course data
  const courses = [
    {
      id: 'dementia',
      titleKey: 'course_dementia_title',
      descriptionKey: 'course_dementia_desc',
      durationKey: 'course_dementia_duration',
      icon: '/icons/courses/brain.svg',
      colorScheme: 'primary' as const,
    },
    {
      id: 'activities',
      titleKey: 'course_activities_title',
      descriptionKey: 'course_activities_desc',
      durationKey: 'course_activities_duration',
      icon: '/icons/courses/activity.svg',
      colorScheme: 'secondary' as const,
    },
    {
      id: 'first-aid',
      titleKey: 'course_first_aid_title',
      descriptionKey: 'course_first_aid_desc',
      durationKey: 'course_first_aid_duration',
      icon: '/icons/courses/first-aid.svg',
      colorScheme: 'accent' as const,
    },
    {
      id: 'communication',
      titleKey: 'course_communication_title',
      descriptionKey: 'course_communication_desc',
      durationKey: 'course_communication_duration',
      icon: '/icons/courses/communication.svg',
      colorScheme: 'primary' as const,
    },
    {
      id: 'emotional',
      titleKey: 'course_emotional_title',
      descriptionKey: 'course_emotional_desc',
      durationKey: 'course_emotional_duration',
      icon: '/icons/courses/heart.svg',
      colorScheme: 'secondary' as const,
    },
    {
      id: 'cultural',
      titleKey: 'course_cultural_title',
      descriptionKey: 'course_cultural_desc',
      durationKey: 'course_cultural_duration',
      icon: '/icons/courses/globe.svg',
      colorScheme: 'accent' as const,
    },
    {
      id: 'digital',
      titleKey: 'course_digital_title',
      descriptionKey: 'course_digital_desc',
      durationKey: 'course_digital_duration',
      icon: '/icons/courses/smartphone.svg',
      colorScheme: 'primary' as const,
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <ServerPageHeader
        title={t('page_title')}
        subtitle={t('page_subtitle')}
        backgroundImage="/images/headers/courses-header.png"
      />
      
      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t('section1_title')}</h2>
            <p className="text-lg text-gray-600 mb-4">{t('section1_p1')}</p>
            <p className="text-lg text-gray-600">{t('section1_p2')}</p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <AnimatedSection 
                key={course.id}
                animation="fade-in-up"
                delay={index * 0.1}
                className="h-full"
              >
                <CourseCard
                  titleKey={course.titleKey}
                  descriptionKey={course.descriptionKey}
                  durationKey={course.durationKey}
                  icon={course.icon}
                  learnMoreHref={`/${locale}/courses/${course.id}`}
                  colorScheme={course.colorScheme}
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <CallToAction
        title={t('page_title')}
        subtitle={t('section1_p2')}
        buttonText={t('donate_button')}
        buttonLink={`/${locale}/donate`}
        variant="gradient"
        shape="rounded"
        withPattern={true}
        buttonClassName="bg-white text-primary-600 hover:bg-gray-100"
      />
    </div>
  );
}
