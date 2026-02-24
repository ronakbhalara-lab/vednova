import { Layout } from '@/components/layout/Layout'
import { useNavigate } from 'react-router-dom'
import Team1 from "@/assets/team-1.png"
import Team2 from "@/assets/team-2.png"
import Team3 from "@/assets/team-3.png"
import Team4 from "@/assets/team-4.png"
import Team5 from "@/assets/team-5.png"
import Team6 from "@/assets/team-6.png"
import Team7 from "@/assets/team-7.png"
import Team8 from "@/assets/hiring.jpg"

const teamData = {
    ceo: {
        name: 'Rahul Munjani',
        designation: 'CEO',
        image: Team1,
        isClick: false
    },
    leaders: [
        {
            name: 'Mayank Ghadiya',
            designation: 'Team Leader',
            image: Team2,
            isClick: false
        },
        {
            name: 'Sneha Patel',
            designation: 'Team Leader',
            image: Team3,
            isClick: false
        }
    ],
    employees: [
        {
            name: 'Kishan Hadgala',
            designation: 'Full Stack Intern',
            image: Team5,
            isClick: false
        },
        {
            name: 'Ronak Bhalara',
            designation: 'Full Stack Developer',
            image: Team4,
            isClick: false
        },
        {
            name: 'Rajkumar Mali',
            designation: 'Full Stack Developer',
            image: Team6,
            isClick: false
        }
    ],
    marketing: [
        {
            name: 'Vibhuti Makvana',
            designation: 'Telecaller Executive',
            image: Team7,
            isClick: false
        },
        {
            name: "We're Hiring",
            designation: 'Join Our Team',
            image: Team8,
            isClick: true
        }
    ]
}

const Card = ({ name, designation, image, isClick, onApplyClick }) => (
    <div className="
    flex flex-col justify-center items-center
    bg-[#fff]
    rounded-xl
    border border-[#654321]/20
    shadow-sm
    p-6
    w-full max-w-[320px] min-h-[320px] sm:w-[320px]
    hover:shadow-md
    transition
  ">
        <img
            src={image}
            alt={name}
            className="w-40 h-40 rounded-full object-cover mb-4 border-2 border-[#654321]/30"
        />
        <h3 className="text-base sm:text-lg font-semibold text-[#0A2342] text-center leading-tight mb-1">
            {name}
        </h3>
        <p className="text-sm text-[#654321]/80 text-center">
            {designation}
        </p>
        {isClick && (
            <button 
                onClick={onApplyClick}
                className="mt-2 text-[#0A2342] font-sans font-semibold text-[13px] transition-colors relative group"
            >
                Apply Now
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0A2342] transition-all duration-300 group-hover:w-full"></span>
            </button>
        )}
    </div>
)

const Section = ({ title, children }) => (
    <div className="mb-10">
        <h1 className="sm:text-[30px] text-[26px] font-semibold text-[#0A2342] text-center mb-6">
            {title}
        </h1>
        {children}
    </div>
)

const Teams = () => {
    const navigate = useNavigate()

    const handleApplyClick = () => {
        navigate('/hiring')
    }

    return (
        <Layout>
            <section className='container-custom bg-[#FFFBF0]'>
                <div className="sm:px-10 px-4 py-10">

                    {/* CEO */}
                    <Section title="Founder & CEO">
                        <div className="flex justify-center">
                            <Card {...teamData.ceo} onApplyClick={undefined} />
                        </div>
                    </Section>

                    <hr className="my-6 border-[#654321]/20" />

                    {/* Team Leaders */}
                    <Section title="Team Leaders">
                        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-4 sm:gap-6">
                            {teamData.leaders.map((leader, index) => (
                                <Card key={index} {...leader} onApplyClick={undefined} />
                            ))}
                        </div>
                    </Section>

                    <hr className="my-6 border-[#654321]/20" />

                    {/* Employees */}
                    <Section title="Full Stack Developer">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                            {teamData.employees.map((employee, index) => (
                                <Card key={index} {...employee} onApplyClick={undefined} />
                            ))}
                        </div>
                    </Section>

                    <hr className="my-6 border-[#654321]/20" />

                    {/* Sales */}
                    <Section title="Sales Team">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                            {teamData.marketing.map((employee, index) => (
                                <Card key={index} {...employee} onApplyClick={index === 1 ? handleApplyClick : undefined} />
                            ))}
                        </div>
                    </Section>
                </div>
            </section>
        </Layout>
    )
}

export default Teams
