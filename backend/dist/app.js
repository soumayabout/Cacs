import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.routes.js';
import eventsRoutes from './routes/events.routes.js';
import newsRoutes from './routes/news.routes.js';
import membersRoutes from './routes/members.routes.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
// Security middleware
app.use(helmet());
// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true
}));
// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: { success: false, message: 'Too many requests, please try again later.' }
});
app.use('/api/', limiter);
// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Health check
app.get('/api/health', (req, res) => {
    res.json({ success: true, status: 'ok', timestamp: new Date().toISOString() });
});
// API routes
app.use('/api', contactRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/members', membersRoutes);
// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal server error',
        code: err.code || 'INTERNAL_ERROR'
    });
});
// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        code: 'NOT_FOUND'
    });
});
app.listen(PORT, () => {
    console.log(`CACS Backend server running on port ${PORT}`);
});
export default app;
//# sourceMappingURL=app.js.map