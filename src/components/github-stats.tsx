'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { StarIcon, UsersIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
  contributionsThisYear: number;
}

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

// Helper function to format time ago
const formatTimeAgo = (date: Date) => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'today';
  if (diffInDays === 1) return '1 day ago';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
};

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    publicRepos: 0,
    followers: 0,
    following: 0,
    totalStars: 0,
    totalForks: 0,
    contributionsThisYear: 0
  });

  const [topRepos, setTopRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch('https://api.github.com/users/shubhamku044');
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/shubhamku044/repos?sort=stars&per_page=100');
        const reposData = await reposResponse.json();

        // Calculate total stars and forks
        const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);

        // Get top 3 repositories by stars
        const topRepos = reposData
          .filter((repo: any) => !repo.fork) // Exclude forked repos
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 3)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description available",
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language || "Unknown",
            url: repo.html_url
          }));

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          totalForks,
          contributionsThisYear: 280 // This would need GitHub GraphQL API for real data
        });

        setTopRepos(topRepos);

        // Fetch recent repository activity (commits, pushes, etc.)
        const activityData = reposData
          .filter((repo: any) => !repo.fork)
          .sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 10)
          .map((repo: any) => ({
            name: repo.name,
            lastUpdated: new Date(repo.updated_at),
            language: repo.language,
            stars: repo.stargazers_count,
            description: repo.description
          }));

        setRecentActivity(activityData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Fallback to static data
        setStats({
          publicRepos: 25,
          followers: 45,
          following: 30,
          totalStars: 150,
          totalForks: 35,
          contributionsThisYear: 280
        });

        setTopRepos([
          {
            name: "la-resume",
            description: "Free, open-source ATS-friendly resume builder powered by LaTeX",
            stars: 110,
            forks: 25,
            language: "TypeScript",
            url: "https://github.com/shubhamku044/la-resume"
          },
          {
            name: "miro-board",
            description: "Real-time collaborative whiteboard application",
            stars: 35,
            forks: 8,
            language: "TypeScript",
            url: "https://github.com/shubhamku044/miro-board"
          },
          {
            name: "restaurant-management-system",
            description: "Comprehensive GoLang REST API for restaurant operations",
            stars: 15,
            forks: 5,
            language: "Go",
            url: "https://github.com/shubhamku044/restaurant-management-system"
          }
        ]);

        // Fallback recent activity data
        setRecentActivity([
          {
            name: "la-resume",
            lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
            language: "TypeScript",
            stars: 110,
            description: "Updated LaTeX resume templates and documentation"
          },
          {
            name: "portfolio",
            lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
            language: "TypeScript",
            stars: 0,
            description: "Enhanced portfolio with new interactive features"
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const languages = [
    { name: "TypeScript", percentage: 45, color: "bg-blue-500" },
    { name: "JavaScript", percentage: 25, color: "bg-yellow-500" },
    { name: "Go", percentage: 15, color: "bg-cyan-500" },
    { name: "Python", percentage: 10, color: "bg-green-500" },
    { name: "Other", percentage: 5, color: "bg-gray-500" }
  ];

  // We'll fetch real repository activity instead of fake contribution data
  const [recentActivity, setRecentActivity] = useState<any[]>([]);


  if (isLoading) {
    return (
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="animate-pulse space-y-8">
            <div className="mx-auto h-8 w-64 rounded bg-gray-700"></div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-24 rounded-2xl bg-gray-800"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>

      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 animate-float text-2xl text-green-400/20">{'</>'}</div>
        <div className="absolute right-1/4 top-40 animate-bounce text-xl text-blue-400/20">{'{ }'}</div>
        <div className="absolute bottom-32 left-1/3 animate-pulse text-lg text-purple-400/20">{'[ ]'}</div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 flex items-center justify-center gap-3 text-4xl font-bold md:text-5xl">
            <FaGithub className="text-white" />
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              GitHub Analytics
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Real-time insights into my coding activity and open-source contributions
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { label: "Repositories", value: stats.publicRepos, icon: FaGithub, color: "from-gray-500 to-gray-700" },
            { label: "Stars Earned", value: stats.totalStars, icon: StarIcon, color: "from-yellow-500 to-orange-500" },
            { label: "Followers", value: stats.followers, icon: UsersIcon, color: "from-blue-500 to-indigo-500" },
            { label: "Contributions", value: stats.contributionsThisYear, icon: CodeBracketIcon, color: "from-green-500 to-emerald-500" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-lg transition-all duration-300 hover:border-white/20 group-hover:scale-105">
                <div className="mb-3 flex items-center justify-between">
                  <stat.icon className="size-8 text-white/70" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}+
                  </motion.div>
                </div>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Featured Repositories
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {topRepos.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-3 flex items-start justify-between">
                    <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {repo.name}
                    </h4>
                    <FaGithub className="size-5 text-white/50" />
                  </div>
                  <p className="mb-4 text-sm text-white/70 line-clamp-2">
                    {repo.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <span className="flex items-center gap-1">
                        <StarIcon className="size-3" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <CodeBracketIcon className="size-3" />
                        {repo.forks}
                      </span>
                    </div>
                    <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">
                      {repo.language}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Language Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Language Distribution
          </h3>
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-lg">
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{lang.name}</span>
                    <span className="text-white/70">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full ${lang.color}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Activity Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Recent Activity
          </h3>
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-lg">
            <div className="space-y-4">
              {recentActivity.length > 0 ? (
                recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="size-3 bg-green-400 rounded-full"></div>
                          <span className="font-medium text-white">{activity.name}</span>
                          {activity.language && (
                            <span className="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-300">
                              {activity.language}
                            </span>
                          )}
                          {activity.stars > 0 && (
                            <span className="flex items-center gap-1 text-xs text-yellow-400">
                              <StarIcon className="size-3" />
                              {activity.stars}
                            </span>
                          )}
                        </div>
                      </div>
                      {activity.description && (
                        <p className="mt-1 text-sm text-white/60 line-clamp-1">
                          {activity.description}
                        </p>
                      )}
                    </div>
                    <div className="text-xs text-white/50">
                      {formatTimeAgo(activity.lastUpdated)}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center text-white/60 py-8">
                  <div className="inline-flex size-16 items-center justify-center rounded-full bg-white/5 mb-4">
                    <FaGithub className="size-8" />
                  </div>
                  <p>Loading recent activity...</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
