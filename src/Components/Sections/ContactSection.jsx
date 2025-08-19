import { Title } from "@/Components/partials/Title";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactInfo } from "../partials/ContactInfo";

export const ContactSection = ()=>{
    return(
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <Title part1='Get In' part2 = 'Touch'/>

                <p className="text-center mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        
                        <ContactInfo/>
                    </div>
                </div>
            </div>
        </section>
    )
};