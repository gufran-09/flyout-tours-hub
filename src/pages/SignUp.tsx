import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SignupForm } from "@/components/auth/SignupForm";
import { SocialAuth } from "@/components/auth/SocialAuth";

export default function SignUp() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block">
                        <img
                            src="/logo.png"
                            alt="Flyout Tours"
                            className="h-16 w-auto object-contain mx-auto"
                        />
                    </Link>
                </div>

                {/* Auth Card */}
                <div className="bg-card border border-border rounded-2xl shadow-elegant p-8">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
                        <p className="text-muted-foreground mt-2">Join us for amazing travel experiences</p>
                    </div>

                    <SignupForm />
                    <SocialAuth />

                    <p className="text-center mt-6 text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                            to="/sign-in"
                            className="text-primary hover:underline font-medium"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
