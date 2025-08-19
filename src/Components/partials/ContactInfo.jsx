import { Mail, MapPin, Phone } from "lucide-react";

export const ContactInfo = ()=>{
    return(
        <>
            <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary"/>
                    </div>
        
                    <div>
                        <h4 className="font-medium text-xl md:text-2xl">Email</h4>
                        <a href="mailto:vasutvlasta@gmail.com" className="text-foreground
                                hover:text-primary hover:cursor-pointer transition-colors">
                            vasutvlasta@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        
            <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary"/>
                    </div>
        
                    <div>
                        <h4 className="font-medium text-xl md:text-2xl">Phone</h4>
                        <a href="tel:+420731656896" className="text-foreground
                                hover:text-primary hover:cursor-pointer transition-colors">
                            +420 731 656 896
                        </a>
                    </div>
                </div>
            </div>
        
            <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary"/>
                    </div>
        
                    <div>
                        <h4 className="font-medium text-xl md:text-2xl">Location</h4>
                        <a className="text-foreground
                                hover:text-primary hover:cursor-pointer transition-colors">
                            Czech Republic
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};