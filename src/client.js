import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'sr8hoox0', // Lấy từ Sanity dashboard
    dataset: 'production',       // Hoặc tên dataset bạn đã tạo
    apiVersion: '2023-01-01',    // API version
    useCdn: true,                // Dùng CDN để tăng tốc
});
