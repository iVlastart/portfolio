import { Instagram, Linkedin, Twitter } from "lucide-react";

export const ContactSocials = ()=>{
    return(
        <>
            <div className="pt-8">
                <h4 className="font-medium mb-4">
                    Connect With Me
                </h4>

                <div className="flex space-x-4 justify-center">
                    <a href="https://www.linkedin.com/in/vlasta-vasut/" target="_blank">
                        <Linkedin/>
                    </a>
                    <a href="https://x.com/iVlastart" target="_blank">
                        <Twitter/>
                    </a>
                    <a href="https://www.instagram.com/ivlastart/" target="_blank">
                        <Instagram/>
                    </a>
                </div>
            </div>
        </>
    )
};