import { TeamMember } from '@/lib/types';
import { Button } from '@/components/ui/Button';

export default function PeoplePage() {
  // Placeholder team members - to be populated later
  const teamMembers: TeamMember[] = [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our talented team of professionals dedicated to delivering excellence
          </p>
        </div>

        {/* Department Filter - To be implemented */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <Button variant="primary" size="sm">
              All
            </Button>
            <Button variant="ghost" size="sm">
              Leadership
            </Button>
            <Button variant="ghost" size="sm">
              Engineering
            </Button>
            <Button variant="ghost" size="sm">
              Sales
            </Button>
          </div>
        </div>

        {/* Team Members Grid */}
        {teamMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/30 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all hover:scale-105"
              >
                {/* Profile Photo */}
                <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {member.photo ? (
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl text-gray-400 dark:text-gray-500">👤</div>
                  )}
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {member.department}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="Email"
                      >
                        📧
                      </a>
                    )}
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="LinkedIn"
                      >
                        💼
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Team Members Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We're building our team directory. Check back soon to meet our talented professionals!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
