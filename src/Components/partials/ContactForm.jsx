export const ContactForm = ()=>{
    return(
        <form className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                </label>
                <input type="text" id="name" name="name" required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background
                        focus:outline-hidden focus:ring-2" autoComplete="off"
                    placeholder="John Doe"/>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                </label>
                <input type="email" id="email" name="email" required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background
                        focus:outline-hidden focus:ring-2" autoComplete="off"
                    placeholder="johndoe@example.com"/>
            </div>

            <div>
                <label htmlFor="msg" className="block text-sm font-medium mb-2">
                    Your Message
                </label>
                <textarea id="msg" name="msg" required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background
                        focus:outline-hidden focus:ring-2 resize-none " autoComplete="off"
                    placeholder="Hello, I'd like to talk about..."/>
            </div>

            <button type="submit">
                
            </button>
        </form>
    );
};