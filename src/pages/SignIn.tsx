import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LoginForm } from "@/components/auth/LoginForm";
import { SocialAuth } from "@/components/auth/SocialAuth";

export default function SignIn() {
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
                        <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
                        <p className="text-muted-foreground mt-2">Sign in to access your account</p>
                    </div>

                    <LoginForm />
                    <SocialAuth />

                    <p className="text-center mt-6 text-muted-foreground">
                        Don't have an account?{" "}
                        <Link
                            to="/sign-up"
                            className="text-primary hover:underline font-medium"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
