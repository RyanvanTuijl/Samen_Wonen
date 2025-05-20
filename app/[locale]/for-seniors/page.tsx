import { useTranslation } from "../../i18n";
import Link from "next/link";
import Image from "next/image";
import ServerPageHeader from "../../components/ServerPageHeader";
import FeatureCard from "../../components/FeatureCard";
import TestimonialCard from "../../components/TestimonialCard";
import CallToAction from "../../components/CallToAction";
import AnimatedSection from "../../components/AnimatedSection";
import ButtonLink from "../../components/ButtonLink";
import ImageWithAnimation from "../../components/ImageWithAnimation";

export default async function ForSeniorsPage({ params: { locale } }) {
  const { t } = await useTranslation(locale, "for-seniors");

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <ServerPageHeader
        title={t("page_title") || "Enhancing Elderly Care Homes with Student Support"}
        subtitle={t("page_subtitle") || "Students bringing companionship, assistance, and joy to elderly care home residents"}
        backgroundImage="/images/headers/seniors-header.png"
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <AnimatedSection animation="fade-in-left">
              <div className="inline-block py-1 px-3 rounded-full bg-secondary-50 text-secondary-600 font-medium text-sm mb-5">
                {t("for_seniors_label") || "Care Home Companion Program"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                {t("section1_title") || "Enhancing Quality of Life in Care Homes Through Intergenerational Connection"}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {t("section1_p1") || "Is your care home looking to enhance residents' quality of life and provide more social interaction? Our carefully curated program matches care homes with respectful, pre-screened students who bring energy, assistance, and companionship to your residents."}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {t("section1_p2") || "Experience meaningful improvement in residents' wellbeing: genuine companionship during regular visits, help with digital skills and daily activities, and a renewed sense of connection to the community."}
              </p>
              <ButtonLink 
                href={`/${locale}/how-it-works`}
                variant="ghost"
                className="text-secondary-600 hover:text-secondary-700 inline-flex items-center"
              >
                {t("learn_more") || "Discover how our Care Home Program works"}
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </ButtonLink>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={200}>
              <ImageWithAnimation 
                src="/images/seniors/seniors-companion.png" 
                alt={t("image_alt") || "Student volunteer spending quality time with elderly resident in a care home common area"}
                fill={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                animation="float"
                decorationPosition="top-left"
                decorationColor="secondary"
                containerClassName="h-80 md:h-96 rounded-xl overflow-hidden shadow-xl relative"
                className="w-full h-full object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block py-1 px-3 rounded-full bg-secondary-50 text-secondary-600 font-medium text-sm mb-5">
                {t("benefits_label") || "Key Advantages"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                {t("benefits_title") || "How Student Volunteers Enhance Care Home Life"}
              </h2>
              <p className="text-lg text-gray-700">
                {t("benefits_subtitle") || "Our program is thoughtfully designed to address the specific needs of care home residents, providing tangible improvements to wellbeing, social engagement, and quality of life."}
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title={t("benefit1_title") || "Genuine Social Connection"}
              description={t("benefit1_desc") || "Regular visits from dedicated student volunteers provide residents with authentic social interactions that combat loneliness and isolation. These consistent relationships become meaningful highlights in residents' weekly routines."}
              colorScheme="secondary"
            >
              <span className="text-2xl">💭</span>
            </FeatureCard>
            <FeatureCard
              title={t("benefit2_title") || "Meaningful Companionship"}
              description={t("benefit2_desc") || "Students provide focused attention and genuine companionship during their visits, engaging in conversation, games, reading, or simply being present. These interactions are especially valuable for residents with limited family contact."}
              colorScheme="secondary"
            >
              <span className="text-2xl">👥</span>
            </FeatureCard>
            <FeatureCard
              title={t("benefit3_title") || "Digital Skills Support"}
              description={t("benefit3_desc") || "Students help residents connect with technology, assisting with video calls to family, browsing the internet, enjoying digital entertainment, or learning new tech skills that help them stay connected to the modern world."}
              colorScheme="secondary"
            >
              <span className="text-2xl">📱</span>
            </FeatureCard>
            <FeatureCard
              title={t("benefit4_title") || "Intergenerational Exchange"}
              description={t("benefit4_desc") || "Experience the vitality of cross-generational relationships. Residents share their wisdom and life stories while gaining fresh perspectives and energy from their student companions. Many of these connections develop into lasting bonds."}
              colorScheme="secondary"
            >
              <span className="text-2xl">🌱</span>
            </FeatureCard>
            <FeatureCard
              title={t("benefit5_title") || "Enhanced Wellbeing"}
              description={t("benefit5_desc") || "Regular social interaction with student volunteers has been shown to improve cognitive function, reduce depression, and enhance overall wellbeing among elderly residents. The program brings new energy and enthusiasm to the care home environment."}
              colorScheme="secondary"
            >
              <span className="text-2xl">🌟</span>
            </FeatureCard>
            <FeatureCard
              title={t("benefit6_title") || "Community Connection"}
              description={t("benefit6_desc") || "Students bring the outside world into care homes, sharing current events, local news, and community happenings. This connection helps residents feel more engaged with the wider community and less isolated in their living environment."}
              colorScheme="secondary"
            >
              <span className="text-2xl">🤝</span>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block py-1 px-3 rounded-full bg-secondary-50 text-secondary-600 font-medium text-sm mb-5">
                {t("how_it_works_label") || "Our Approach"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                {t("how_it_works_title") || "Implementing Student Visits in Your Care Home"}
              </h2>
              <p className="text-lg text-gray-700">
                {t("how_it_works_subtitle") || "We've refined our process through years of experience, prioritizing safety, compatibility, and positive impact. Every step is designed with your residents' wellbeing in mind."}
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="relative">
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t("step1_title") || "Initial Consultation"}</h3>
                <p className="text-gray-700">
                  {t("step1_desc") || "Begin with a conversation with our care home specialist who will explain the program, answer your questions, and help determine how student visits can best benefit your residents."}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="relative">
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t("step2_title") || "Facility Assessment"}</h3>
                <p className="text-gray-700">
                  {t("step2_desc") || "Our coordinator visits your care home to understand the environment, discuss resident needs and interests, and help establish guidelines for successful student volunteer interactions."}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="relative">
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t("step3_title") || "Student Selection"}</h3>
                <p className="text-gray-700">
                  {t("step3_desc") || "We identify suitable student volunteers who have been thoroughly screened, interviewed, and background-checked. Students receive training specific to working with elderly residents before their first visit."}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="relative">
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t("step4_title") || "Ongoing Support"}</h3>
                <p className="text-gray-700">
                  {t("step4_desc") || "Our relationship continues with regular check-ins, feedback collection, and prompt assistance with any concerns. We monitor program effectiveness and make adjustments to ensure maximum benefit to your residents."}
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fade-in-up" delay={500}>
            <div className="text-center mt-12">
              <ButtonLink
                href={`/${locale}/how-it-works`}
                variant="primary"
              >
                {t("detailed_process_button") || "Learn about our full matching process"}
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Safety and Trust Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-right">
              <ImageWithAnimation
                src="/images/seniors/seniors-trust.png"
                alt={t("trust_image_alt") || "Program coordinator discussing safety procedures with care home staff"}
                fill={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                animation="float"
                decorationPosition="bottom-right"
                decorationColor="primary"
                containerClassName="h-80 md:h-96 rounded-xl overflow-hidden shadow-xl relative"
                className="w-full h-full object-cover"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-600 font-medium text-sm mb-5">
                {t("safety_label") || "Resident Safety Is Our Priority"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                {t("safety_title") || "Industry-Leading Safety Standards"}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {t("safety_p1") || "We recognize that introducing volunteers into care home environments requires extraordinary trust. That's why we've developed one of the most comprehensive vetting systems in the industry, with safeguards ensuring only the most suitable students participate."}
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{t("safety_check1") || "Multi-tiered background screening including criminal history, identity verification, and academic enrollment confirmation"}</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{t("safety_check2") || "Personal interviews, character references, and personality assessments with our trained specialist team"}</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{t("safety_check3") || "Comprehensive training for all student volunteers on elder care best practices, boundaries, and care home protocols"}</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{t("safety_check4") || "Regular supervision and evaluation of volunteer interactions, with feedback collection from both residents and care home staff"}</p>
                </div>
              </div>
              <ButtonLink
                href={`/${locale}/safety`}
                variant="ghost"
                className="text-primary-600 hover:text-primary-700 inline-flex items-center"
              >
                {t("learn_about_safety") || "Explore our comprehensive safety protocols"} 
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </ButtonLink>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block py-1 px-3 rounded-full bg-secondary-50 text-secondary-600 font-medium text-sm mb-5">
                {t("testimonials_label") || "Real Experiences"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                {t("testimonials_title") || "What Care Home Partners Say"}
              </h2>
              <p className="text-lg text-gray-700">
                {t("testimonials_subtitle") || "Read firsthand accounts from care home administrators and staff who have witnessed the positive impact of our student volunteer program on their residents' wellbeing."}
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <TestimonialCard
              quote={t("testimonial1_quote") || "The student volunteers have transformed our care home atmosphere. Residents eagerly anticipate their visits each week. We've seen noticeable improvements in mood, engagement, and even cognitive function among residents who regularly interact with our student volunteers."}
              name={t("testimonial1_author") || "Margaret P., 52"}
              role={t("testimonial1_location") || "Care Home Director for 8+ years"}
              imageSrc="/images/contact/testimonials/testimonial1.jpg"
              rating={5}
              colorScheme="secondary"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <TestimonialCard
              quote={t("testimonial2_quote") || "As head of activities, I was skeptical about integrating students into our program. Now I'm amazed by how quickly they've connected with our residents. The students bring fresh energy and ideas, and they're particularly helpful with technology that lets our residents connect with family members more frequently."}
              name={t("testimonial2_author") || "Robert K., 46"}
              role={t("testimonial2_location") || "Activities Coordinator for 12 years"}
              imageSrc="/images/contact/testimonials/testimonial2.jpg"
              rating={5}
              colorScheme="secondary"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <TestimonialCard
              quote={t("testimonial3_quote") || "The program has been wonderful for our facility. The thorough screening and training process reassured our staff and families. The students show genuine compassion and patience with our residents, and their consistent weekly visits have become a highlight. We've noticed particular benefits for residents with fewer family visitors."}
              name={t("testimonial3_author") || "Elizabeth W., 49"}
              role={t("testimonial3_location") || "Resident Care Manager since 2019"}
              imageSrc="/images/contact/testimonials/testimonial1-alt.png"
              rating={5}
              colorScheme="secondary"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          
          <AnimatedSection animation="fade-in-up" delay={300}>
            <div className="text-center mt-12">
              <ButtonLink
                href={`/${locale}/testimonials`}
                variant="ghost"
                className="text-secondary-600 hover:text-secondary-700 inline-flex items-center"
              >
                {t("read_more_stories") || "Discover more HomeShare journeys"} 
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-600 font-medium text-sm mb-5">
                {t("faq_label") || "Questions Answered"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                {t("faq_title") || "What Care Homes Want to Know"}
              </h2>
              <p className="text-lg text-gray-700">
                {t("faq_subtitle") || "We've compiled answers to the questions we hear most frequently from care home administrators considering our program. If your question isn't answered here, our team is just a phone call away."}
              </p>
            </div>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{t("faq1_question") || "How often would students visit our care home?"}</h3>
                  <p className="text-gray-700">{t("faq1_answer") || "Student volunteers typically visit once or twice per week for 2-3 hours per visit. We work with each care home to establish a consistent schedule that works best for your facility and residents. Many care homes prefer to have different students visit on different days to provide more varied interaction opportunities throughout the week."}</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={200}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{t("faq2_question") || "How are students selected and prepared for working with our residents?"}</h3>
                  <p className="text-gray-700">{t("faq2_answer") || "Our rigorous selection process includes comprehensive background checks, interviews, reference checks, and personality assessments. Only 32% of applicants pass our standards. Selected students then complete our training program covering elder care basics, dementia awareness, communication techniques, boundaries, and emergency protocols. All students must demonstrate appropriate skills and understanding before their first visit."}</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={300}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{t("faq3_question") || "What types of activities do student volunteers do with residents?"}</h3>
                  <p className="text-gray-700">{t("faq3_answer") || "Activities are tailored to residents' interests and abilities, including conversation, reading together, art projects, music, games, technology assistance, gentle exercise, or simply companionable presence. We work with your activities coordinator to identify where students can add the most value, either in group settings or one-on-one interactions. Students receive guidance on adapting activities for various physical and cognitive abilities."}</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={400}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{t("faq4_question") || "How do you monitor program effectiveness and student performance?"}</h3>
                  <p className="text-gray-700">{t("faq4_answer") || "We employ a multi-faceted monitoring approach including regular check-ins with care home staff, feedback collection from residents, student self-assessments, and occasional observation visits. After the first month, we conduct a comprehensive review and make any necessary adjustments. Quarterly evaluations measure impact metrics such as resident engagement levels, mood improvements, and staff satisfaction. If a student isn't meeting expectations, we can quickly arrange a replacement."}</p>
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection animation="fade-in-up" delay={500}>
              <div className="text-center mt-12">
                <ButtonLink
                  href={`/${locale}/faq`}
                  variant="ghost"
                  className="text-primary-600 hover:text-primary-700 inline-flex items-center"
                >                {t("view_all_faqs") || "Explore our comprehensive FAQ section"} 
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
                </ButtonLink>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title={t("cta_title") || "Enhance Your Care Home with Intergenerational Connection"}
        subtitle={t("cta_subtitle") || "Join over 120 care homes that have discovered how student volunteers can bring energy, compassion, and joy to their elderly residents."}
        buttonText={t("cta_button") || "Start Your Care Home Program"}
        buttonLink={`/${locale}/contact`}
        variant="accent"
        withAnimation={true}
        shape="wave"
      />
    </div>
  );
}

