import { Layout } from '@/components/layout/Layout'
import { useState } from 'react'
import './Hiring.css'
import { useNavigate } from 'react-router-dom'

const jobData = [
    {
        id: 1,
        title: 'Sales Executive',
        description: 'We are looking for a motivated Sales Executive to join our dynamic sales team. The ideal candidate will be responsible for generating leads, building client relationships, and achieving sales targets.',
        requirements: [
            'Strong communication and interpersonal skills',
            'Proven experience in sales or business development',
            'Ability to work independently and as part of a team',
            'Excellent negotiation and presentation skills',
            'Bachelor\'s degree in Business Administration or related field'
        ],
        location: '132 Kedar Business center, bapa sitaram chowk katargam surat',
        timing: '9:30 AM to 6:30 PM',
        workType: 'On Site',
        employmentType: 'Full Time'
    },
    {
        id: 2,
        title: '.Net Developer',
        description: 'We are seeking an experienced .Net Developer to join our development team. The candidate will be responsible for designing, developing, and maintaining web applications using .NET technologies.',
        requirements: [
            '1+ years of experience with .NET Framework and C#',
            'Strong knowledge of ASP.NET, MVC, and Web API',
            'Experience with SQL Server and database design',
            'Familiarity with front-end technologies (HTML, CSS, JavaScript)',
            'Bachelor\'s degree in Computer Science or related field'
        ],
        location: '132 Kedar Business center, bapa sitaram chowk katargam surat',
        timing: '9:30 AM to 6:30 PM',
        workType: 'On Site',
        employmentType: 'Full Time'
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        description: 'We are looking for a talented Full Stack Developer to join our growing team. The ideal candidate will have experience working with both front-end and back-end technologies.',
        requirements: [
            'Strong knowledge of React.js and modern JavaScript',
            'Experience with Node.js and Express.js',
            'Proficiency in database management (SQL/NoSQL)',
            'Understanding of RESTful APIs and microservices',
            'Experience with version control systems (Git)',
            'Bachelor\'s degree in Computer Science or related field'
        ],
        location: '132 Kedar Business center, bapa sitaram chowk katargam surat',
        timing: '9:30 AM to 6:30 PM',
        workType: 'On Site',
        employmentType: 'Full Time'
    }
]

const JobCard = ({ job, isSelected, onClick }) => (
    <div
        onClick={onClick}
        className={`
            job-card p-6 rounded-xl border cursor-pointer transition-all duration-300 min-w-0
            ${isSelected
                ? 'bg-[#0A2342] text-white border-[#0A2342]'
                : 'bg-white text-[#0A2342] border-[#654321]/20 hover:shadow-md'
            }
        `}
    >
        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
            <span className={`text-xs ${isSelected ? 'text-[#0A2342]' : 'text-[#654321]/80'} bg-gray-100 px-2 py-1 rounded`}>
                📍 {job.location}
            </span>
            <span className={`text-xs ${isSelected ? 'text-[#0A2342]' : 'text-[#654321]/80'} bg-gray-100 px-2 py-1 rounded`}>
                🕒 {job.timing}
            </span>
            <span className={`text-xs ${isSelected ? 'text-[#0A2342]' : 'text-[#654321]/80'} bg-gray-100 px-2 py-1 rounded`}>
                💼 {job.employmentType}
            </span>
        </div>
        <p className={`text-sm mb-4 ${isSelected ? 'text-white/90' : 'text-[#654321]/80'} line-clamp-3`}>
            {job.description}
        </p>
    </div>
)

const Hiring = () => {
    const [selectedJob, setSelectedJob] = useState(jobData[0])
    const navigate = useNavigate()

    const handleApplyClick = () => {
        navigate('/contact')
    }

    return (
        <Layout>
            <section className='container-custom bg-[#FFFBF0] min-h-screen'>
                <div className="sm:px-10 px-4 py-10">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="sm:text-[40px] text-[32px] font-bold text-[#0A2342] mb-4">
                            Join Our Team
                        </h1>
                        <p className="text-lg text-[#654321]/80 max-w-2xl mx-auto">
                            We're always looking for talented individuals to join our growing team.
                            Explore our current openings below.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Job List */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-[#0A2342] mb-4">
                                Current Openings
                            </h2>
                            {jobData.map((job) => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    isSelected={selectedJob.id === job.id}
                                    onClick={() => setSelectedJob(job)}
                                />
                            ))}
                        </div>

                        {/* Job Details */}
                        <div className="lg:sticky lg:top-8 h-fit">
                            <div className="job-details bg-white rounded-xl border border-[#654321]/20 p-8 min-w-0">
                                <h2 className="text-2xl font-bold text-[#0A2342] mb-4">
                                    {selectedJob.title}
                                </h2>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="text-xs text-[#654321]/80 bg-gray-100 px-2 py-1 rounded">
                                        📍 {selectedJob.location}
                                    </span>
                                    <span className="text-xs text-[#654321]/80 bg-gray-100 px-2 py-1 rounded">
                                        🕒 {selectedJob.timing}
                                    </span>
                                    <span className="text-xs text-[#654321]/80 bg-gray-100 px-2 py-1 rounded">
                                        🏢 {selectedJob.workType}
                                    </span>
                                    <span className="text-xs text-[#654321]/80 bg-gray-100 px-2 py-1 rounded">
                                        💼 {selectedJob.employmentType}
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-[#0A2342] mb-3">
                                        Job Description
                                    </h3>
                                    <p className="text-[#654321]/80 leading-relaxed">
                                        {selectedJob.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-[#0A2342] mb-3">
                                        Requirements
                                    </h3>
                                    <ul className="space-y-2">
                                        {selectedJob.requirements.map((req, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-[#0A2342] mr-2">•</span>
                                                <span className="text-[#654321]/80">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button onClick={handleApplyClick} className="w-full py-3 bg-[#0A2342] text-white rounded-lg font-semibold hover:bg-[#654321] transition-colors">
                                    Apply for this Position
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Hiring
