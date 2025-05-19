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
        title={t("page_title") || "HomeShare: A Solution Made for Seniors"}
        subtitle={t("page_subtitle") || "Transform your extra space into companionship, security, and monthly income"}
        backgroundImage="/images/headers/seniors-header.png"
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <AnimatedSection animation="fade-in-left">
              <div className="inline-block py-1 px-3 rounded-full bg-secondary-50 text-secondary-600 font-medium text-sm mb-5">
                {t("for_seniors_label") || "Senior HomeShare Program"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                {t("section1_title") || "Reimagine Your Home as a Hub of Connection and Financial Security"}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {t("section1_p1") || "Is your home filled with extra space but missing the energy it once had? Our carefully curated HomeShare program matches seniors with respectful, pre-screened students who bring life, assistance, and supplemental income to your doorstep."}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {t("section1_p2") || "Experience the perfect balance of independence and support: meaningful companionship when you desire it, help with daily tasks when you need it, and reliable monthly income that enhances your financial freedom."}
              </p>
              <ButtonLink 
                href={`/${locale}/how-it-works`}
                variant="ghost"
                className="text-secondary-600 hover:text-secondary-700 inline-flex items-center"
              >
                {t("learn_more") || "Discover how our HomeShare works"}
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </ButtonLink>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={200}>
              <ImageWithAnimation 
                src="/images/seniors/seniors-companion.png" 
                alt={t("image_alt") || "Senior homeowner and student sharing quality time over coffee in a bright living room"}
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
                {t("benefits_title") || "How HomeShare Enriches Senior Lifestyles"}
              </h2>
              <p className="text-lg text-gray-700">
                {t("benefits_subtitle") || "Our program is thoughtfully designed to address the specific needs of seniors, providing tangible improvements to financial security, social wellness, and quality of life."}
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title={t("benefit1_title") || "Sustainable Income Stream"}
              description={t("benefit1_desc") || "Generate $500-$1,200+ monthly from your unused space. This dependable income can cover utilities, property taxes, healthcare costs, or enhance your retirement lifestyle."}
              colorScheme="secondary"
            >
              <span className="text-2xl">💰</span>
            </FeatureCard>
            <FeatureCard
              title={t("benefit2_title") || "Meaningful Companionship"}
              description={t("benefit2_desc") || "Enjoy stimulating conversations and shared activities that combat isolation without sacrificing privacy. Our carefully matched students respect your space while providing welcome social connection."}
              colorScheme="secondary"
            >
              <span className="text-2xl">👥</span>
            </FeatureCard>
            <FeatureCard
              title={t("benefit3_title") || "Age in Place Confidently"}
              description={t("benefit3_desc") || "Remain in your cherished home and community longer with added financial resources and household support. HomeShare provides an alternative to downsizing or assisted living while maintaining your independence."}
              colorScheme="secondary"
            >
              <span className="text-2xl">🏠</span>
            </FeatureCard>
            <FeatureCard
              title={t("benefit4_title") || "Intergenerational Exchange"}
              description={t("benefit4_desc") || "Experience the vitality of cross-generational relationships. Share your wisdom while gaining fresh perspectives and energy from your student companion. Many of our matches develop lasting, family-like bonds."}
              colorScheme="secondary"
            >
              <span className="text-2xl">🌱</span>
            </FeatureCard>
            <FeatureCard
              title={t("benefit5_title") || "Enhanced Security"}
              description={t("benefit5_desc") || "Enjoy greater peace of mind knowing someone is present in your home, particularly during evenings or when traveling. Many homeowners report feeling significantly safer with a trusted companion in the house."}
              colorScheme="secondary"
            >
              <span className="text-2xl">🔒</span>
            </FeatureCard>
            <FeatureCard
              title={t("benefit6_title") || "Practical Support"}
              description={t("benefit6_desc") || "Receive help with technology challenges, household tasks, and occasional errands. Many students assist with smartphone use, computer issues, garden maintenance, pet care, or grocery shopping as part of their arrangement."}
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
                {t("how_it_works_title") || "Your Journey to Successful Home Sharing"}
              </h2>
              <p className="text-lg text-gray-700">
                {t("how_it_works_subtitle") || "We've refined our matching process through years of experience, prioritizing safety, compatibility, and mutual satisfaction. Every step is designed with your comfort in mind."}
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="relative">
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t("step1_title") || "Personalized Consultation"}</h3>
                <p className="text-gray-700">
                  {t("step1_desc") || "Begin with a no-obligation conversation with our senior specialist who will explain the program, answer your questions, and help you determine if HomeShare is right for you."}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="relative">
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t("step2_title") || "Home Assessment"}</h3>
                <p className="text-gray-700">
                  {t("step2_desc") || "Our coordinator visits your home to understand your living space, discuss your preferences and lifestyle, and help establish guidelines for your ideal home-sharing arrangement."}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="relative">
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t("step3_title") || "Careful Matching"}</h3>
                <p className="text-gray-700">
                  {t("step3_desc") || "Using our proprietary compatibility algorithm and personal insights from our team, we identify potential student matches who have been thoroughly screened, interviewed, and background-checked."}
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
                  {t("step4_desc") || "Our relationship continues with regular check-ins, mediation if needed, and prompt assistance with any concerns. We're just a phone call away throughout your entire HomeShare experience."}
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
                alt={t("trust_image_alt") || "HomeShare coordinator discussing safety measures with a senior homeowner"}
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
                {t("safety_label") || "Your Safety Is Non-Negotiable"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                {t("safety_title") || "Industry-Leading Security Standards"}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {t("safety_p1") || "We recognize that inviting someone into your home requires extraordinary trust. That's why we've developed the most comprehensive vetting system in the home-sharing industry, with safeguards exceeding those of most rental arrangements."}
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
                  <p className="text-gray-700">{t("safety_check2") || "Personal interviews, character references, and compatibility profiling with our trained matching specialists"}</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{t("safety_check3") || "Legally-reviewed HomeShare agreements that clearly define boundaries, responsibilities, and terms for both parties"}</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{t("safety_check4") || "Dedicated support coordinator assigned to each match with scheduled check-ins and 24/7 emergency assistance"}</p>
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
                {t("testimonials_title") || "What Our Senior HomeShare Members Say"}
              </h2>
              <p className="text-lg text-gray-700">
                {t("testimonials_subtitle") || "Read firsthand accounts from seniors who discovered new possibilities through our program. These authentic stories reflect the life-changing impact of home-sharing."}
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <TestimonialCard
              quote={t("testimonial1_quote") || "HomeShare changed everything for me. My student Jennifer helps me navigate my iPad, accompanies me on walks, and the extra $850 monthly covers my property taxes. I've gained both financial security and a delightful companion who brings laughter back into my home."}
              name={t("testimonial1_author") || "Margaret P., 72"}
              role={t("testimonial1_location") || "HomeShare member for 2+ years"}
              imageSrc="/images/contact/testimonials/testimonial1.jpg"
              rating={5}
              colorScheme="secondary"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <TestimonialCard
              quote={t("testimonial2_quote") || "After losing my wife, the silence in our home was deafening. My student Carlos has brought life back into these rooms. We share dinner twice weekly, and he's teaching me Spanish. I sleep better knowing someone else is in the house, and the rental income has been a tremendous help with medical expenses."}
              name={t("testimonial2_author") || "Robert K., 76"}
              role={t("testimonial2_location") || "HomeShare member for 3 years"}
              imageSrc="/images/contact/testimonials/testimonial2.jpg"
              rating={5}
              colorScheme="secondary"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <TestimonialCard
              quote={t("testimonial3_quote") || "I was initially hesitant, but HomeShare's thorough screening process reassured me. My match with Sarah has been perfect—she respects my routines and privacy, while providing delightful company when I'm in the mood. She keeps my garden thriving and helps me stay connected with my grandchildren through video calls. The additional income has allowed me to take a vacation for the first time in years."}
              name={t("testimonial3_author") || "Elizabeth W., 79"}
              role={t("testimonial3_location") || "HomeShare member since 2022"}
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
                {t("faq_title") || "What Senior Homeowners Want to Know"}
              </h2>
              <p className="text-lg text-gray-700">
                {t("faq_subtitle") || "We've compiled answers to the questions we hear most frequently from potential HomeShare members. If your question isn't answered here, our team is just a phone call away."}
              </p>
            </div>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{t("faq1_question") || "How much monthly income can I expect from HomeShare?"}</h3>
                  <p className="text-gray-700">{t("faq1_answer") || "Monthly income typically ranges from $650-$1,500 depending on your location, space offered, and included amenities. Urban areas and private bathrooms command higher rates. Our HomeShare specialists will assess your space and advise on optimal pricing based on market data and comparable arrangements in your area."}</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={200}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{t("faq2_question") || "What security measures ensure my safety with a student in my home?"}</h3>
                  <p className="text-gray-700">{t("faq2_answer") || "Our industry-leading 7-point screening includes comprehensive background checks, identity verification, enrollment confirmation, reference interviews, credit assessments, in-person evaluations, and social media reviews. Only 32% of applicants pass our rigorous standards. You'll always have final approval after supervised in-person meetings, and we maintain regular oversight throughout the arrangement."}</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={300}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{t("faq3_question") || "What happens if my HomeShare arrangement isn't working out?"}</h3>
                  <p className="text-gray-700">{t("faq3_answer") || "While 94% of our matches continue successfully, we understand that sometimes things don't work as planned. All arrangements include a 2-week trial period and straightforward exit provisions. Our dedicated mediators can often resolve minor issues, but if relocation becomes necessary, we'll quickly begin searching for a more suitable match while ensuring a smooth transition."}</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-up" delay={400}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{t("faq4_question") || "How much interaction will I have with my student housemate?"}</h3>
                  <p className="text-gray-700">{t("faq4_answer") || "Your HomeShare experience is customized to your social preferences. Some members enjoy regular shared meals and activities, while others prefer more independent arrangements with occasional check-ins. During our intake process, we'll discuss your ideal balance of interaction and privacy, and match you accordingly. All expectations are documented in our HomeShare Agreement, which can be adjusted as your relationship evolves."}</p>
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
        title={t("cta_title") || "Transform Your Extra Space into Financial Security and Meaningful Connection"}
        subtitle={t("cta_subtitle") || "Join over 5,000 seniors who have discovered the perfect balance of independence, income, and companionship through our HomeShare program."}
        buttonText={t("cta_button") || "Begin Your HomeShare Journey"}
        buttonLink={`/${locale}/contact`}
        variant="accent"
        withAnimation={true}
        shape="wave"
      />
    </div>
  );
}

