import { FastifyPluginAsync } from 'fastify'
import UploadImage from './upload-image';

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(UploadImage)
}

export default root;
