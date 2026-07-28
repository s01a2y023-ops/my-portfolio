import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 👇 1. 定義 GitHub 專案的資料結構
interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
}

export default function Projects() {
    // 👇 2. 告訴 useState 我們的陣列裡存的是 GitHubRepo 型別
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://api.github.com/users/s01a2y023-ops/repos?sort=updated');
                
                if (!response.ok) {
                    throw new Error(`GitHub API Error: ${response.status}`);
                }

                const data = await response.json();
                setRepos(data.slice(0, 6));
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id="projects" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-black text-blue-900 mb-12 text-center">My Projects</h2>

                {error ? (
                    <div className="text-center text-red-500 font-bold">Error: {error}</div>
                ) : loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        {repos.map((repo, index) => (
                            <motion.a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="block p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <h3 className="text-xl font-bold text-blue-800 mb-2">{repo.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 h-12 line-clamp-2">
                                    {repo.description || "No description provided."}
                                </p>
                                <div className="flex justify-between items-center text-xs text-gray-400">
                                    <span className="px-2 py-1 bg-white rounded-md border">{repo.language || "N/A"}</span>
                                    <span>⭐ {repo.stargazers_count}</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}