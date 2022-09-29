import dotenv from 'dotenv'

dotenv.config()

export default {
    api:{
        tiemposession: Number(process.env.TIEMPO_EXPIRACION || 600000),
		apisecret: process.env.API_SECRET || 'coderhouse'
    },
	}
