import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Tạo client Sanity
export const client = sanityClient({
    projectId: 'fu5tttj6', // Thay bằng Project ID của bạn
    dataset: 'production',         // Dataset bạn sử dụng (thường là 'production')
    apiVersion: '2025-10-09',      // Ngày API phiên bản
    useCdn: true,                  // Sử dụng CDN để tăng tốc độ
});

// Tạo hàm `urlFor` để tạo URL từ hình ảnh Sanity
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
client
    .fetch('*[_type == "news"]')
    .then((data) => console.log('Data from Sanity:', data))
    .catch((err) => console.error('Sanity error:', err));

