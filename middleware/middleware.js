const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.path}`);
    next();
};

const agent = (req, res, next) => {
    const userAgent = req.get('User-Agent') || 'Group Project';
    console.log(`User-Agent: ${userAgent}`);
    next();
};

module.exports = { logger, agent };