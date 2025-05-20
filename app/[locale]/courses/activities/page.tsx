import React from 'react';
import { useTranslation } from '../../../i18n';
import { redirect } from 'next/navigation';

export default async function ActivitiesCoursePage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslation(locale, 'courses');
  
  // For now, we'll just redirect to the main courses page
  // In a production app, we would create full content for each course
  redirect(`/${locale}/courses`);
  
  return null;
}
