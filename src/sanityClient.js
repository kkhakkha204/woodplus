import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'sr8hoox0', // Thay bằng projectId của bạn
    dataset: 'production', // Dataset của bạn, thường là 'production'
    useCdn: true, // Dùng CDN để truy vấn dữ liệu nhanh hơn (chỉ cần cho dữ liệu công khai)
});

export default client;
