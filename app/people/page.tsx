import { TeamMember } from '@/lib/types';

export default function PeoplePage() {
  // Placeholder team members - to be populated later
  const teamMembers: TeamMember[] = [];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our talented team of professionals dedicated to delivering excellence
          </p>
        </div>

        {/* Department Filter - To be implemented */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex gap-2 bg-white p-2 rounded-lg shadow-sm">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium">
              All
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              Leadership
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              Engineering
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              Sales
            </button>
          </div>
        </div>

        {/* Team Members Grid */}
        {teamMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Profile Photo */}
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  {member.photo ? (
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl text-gray-400">👤</div>
                  )}
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {member.department}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-gray-600 hover:text-blue-600"
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
                        className="text-gray-600 hover:text-blue-600"
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
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Team Members Coming Soon
            </h3>
            <p className="text-gray-600">
              We're building our team directory. Check back soon to meet our talented professionals!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
