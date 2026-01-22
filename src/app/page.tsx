'use client';

import Link from "next/link";
import { ArrowRight, Download, Award, Trophy, Medal, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SkillsSection from "@/components/skills-section";
import { AnimatedSection, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/usePortfolioData";

// Helper function to format bio with bold keywords
const formatBio = (bio: string) => {
  const keywords = ['Mercor', 'Summer of Bitcoin', 'Google Summer of Code'];
  let formatted = bio;
  
  keywords.forEach(keyword => {
    const regex = new RegExp(`(${keyword})`, 'gi');
    formatted = formatted.replace(regex, '<strong class="font-bold text-gray-900">$1</strong>');
  });
  
  return formatted;
};

export default function Home() {
  const { data: portfolioData, isLoading } = usePortfolioData();
  const { personalInfo, projects, skills, experience } = portfolioData;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  const achievements = [
    {
      title: "Codeforces Specialist",
      description: "Peak rating of 1570, solved 600+ problems",
      link: "https://codeforces.com/profile/its_believe",
      icon: Trophy,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "LeetCode Knight",
      description: "Peak rating of 1849, 1100+ problems solved",
      link: "https://leetcode.com/u/its_believe/",
      icon: Medal,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "CodeChef 4-Star",
      description: "Peak rating of 1907",
      link: "https://www.codechef.com/users/ie9abhi1e10",
      icon: Star,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Google Kickstart 2022",
      description: "Global Rank 359th among 20,000+ participants",
      link: null,
      icon: Award,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Summer of Bitcoin 2024",
      description: "Top 1% (50/5,000) selection from 50 countries",
      link: null,
      icon: Medal,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Google Summer of Code 2023",
      description: "Top 2% (967/43,765) selection from 160 countries",
      link: null,
      icon: Star,
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <FadeIn direction="left">
              <div className="text-center lg:text-left">
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>
                </motion.h1>
                
                <motion.h2 
                  className="text-xl md:text-2xl text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {personalInfo.title}
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-600 mb-8 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  dangerouslySetInnerHTML={{ __html: formatBio(personalInfo.bio) }}
                />
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link href="/about">
                    <Button size="lg" className="w-full sm:w-auto">
                      Experience
                      <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Download size={20} className="mr-2" />
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </FadeIn>

            {/* Avatar/Image */}
            <FadeIn direction="right" className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-6xl font-bold text-gray-700">
                      {personalInfo.name.charAt(0)}
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Award className="text-yellow-500" size={24} />
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notable achievements in competitive programming and open source development
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const AchievementCard = (
                <Card className={`h-full hover:shadow-lg transition-all duration-300 ${achievement.link ? 'cursor-pointer hover:scale-105' : ''}`}>
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mb-4`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {achievement.description}
                    </p>
                    {achievement.link && (
                      <div className="flex items-center text-blue-600 font-medium">
                        <span className="mr-2">View Profile</span>
                        <ExternalLink size={16} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              );

              return (
                <StaggerItem key={index}>
                  {achievement.link ? (
                    <a 
                      href={achievement.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {AchievementCard}
                    </a>
                  ) : (
                    AchievementCard
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Collaborate?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I am open to exploring new opportunities and impactful engineering work. Let's connect to discuss how we can build effective and scalable solutions together.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get in Touch
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
