import { Layout } from '@/components/layout/Layout'
import Team1 from "@/assets/team-1.png"
import Team2 from "@/assets/team-2.png"
import Team3 from "@/assets/team-3.png"
import Team4 from "@/assets/team-4.png"
import Team5 from "@/assets/team-5.png"
import Team6 from "@/assets/team-6.png"
import Team7 from "@/assets/team-7.png"
import Team8 from "@/assets/team-8.png"

const teamData = {
    ceo: {
        name: 'Rahul Munjani',
        designation: 'CEO',
        image: Team1
    },
    leaders: [
        {
            name: 'Mayank Ghadiya',
            designation: 'Team Leader',
            image: Team2
        },
        {
            name: 'Sneha Patel',
            designation: 'Team Leader',
            image: Team3
        }
    ],
    employees: [
        {
            name: 'Kishan Hadgala',
            designation: 'Full Stack Intern',
            image: Team4
        },
        {
            name: 'Ronak Bhalara',
            designation: 'Full Stack Developer',
            image: Team5
        },
        {
            name: 'Rajkumar Mali',
            designation: 'Full Stack Developer',
            image: Team6
        }
    ],
    marketing: [
        {
            name: 'Vibhuti Makvana',
            designation: 'Telecaller Executive',
            image: Team7
        },
        {
            name: 'Krisha Solanki',
            designation: 'Digital Marketing',
            image: Team8
        }
    ]
}

const Card = ({ name, designation, image }) => (
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
    return (
        <Layout>
            <section className='container-custom bg-[#FFFBF0]'>
                <div className="sm:px-10 px-4 py-10">

                    {/* CEO */}
                    <Section title="Founder & CEO">
                        <div className="flex justify-center">
                            <Card {...teamData.ceo} />
                        </div>
                    </Section>

                    <hr className="my-6 border-[#654321]/20" />

                    {/* Team Leaders */}
                    <Section title="Team Leaders">
                        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-4 sm:gap-6">
                            {teamData.leaders.map((leader, index) => (
                                <Card key={index} {...leader} />
                            ))}
                        </div>
                    </Section>

                    <hr className="my-6 border-[#654321]/20" />

                    {/* Employees */}
                    <Section title="Full Stack Developer">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                            {teamData.employees.map((employee, index) => (
                                <Card key={index} {...employee} />
                            ))}
                        </div>
                    </Section>

                    <hr className="my-6 border-[#654321]/20" />

                    {/* Sales */}
                    <Section title="Sales Team">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                            {teamData.marketing.map((employee, index) => (
                                <Card key={index} {...employee} />
                            ))}
                        </div>
                    </Section>
                </div>
            </section>
        </Layout>
    )
}

export default Teams
