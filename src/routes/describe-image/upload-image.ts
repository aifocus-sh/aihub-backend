import { FastifyPluginAsync } from "fastify";
import fs from 'fs';
import { join } from "path";

function generateRandomFileName(filename: string): string {
  
  const extension = filename.split(".").pop();

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const nameLength = 10;
  let randomName = "";

  for (let i = 0; i < nameLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomName += chars[randomIndex];
  }

  const timestamp = Date.now();
  return `${randomName}_${timestamp}.${extension}`;
}

const UploadImage: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.post("/upload-image", async function (req, res) {
    const file = await req.file();
    const fileName = generateRandomFileName(file?.filename || "");
    const writeStream = fs.createWriteStream(join(process.cwd(), `/public/images/${fileName}`));
    file?.file.pipe(writeStream);

    return res.send({ status: 'success', message: 'Imagen subida con éxito!', file: fileName })
  });
};

export default UploadImage;
