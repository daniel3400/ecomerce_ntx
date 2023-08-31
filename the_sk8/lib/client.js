import projectId from '@/sanity/env';
import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const client = SanityClient((
    projectId: 'm39gcfza',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: 'sk9yXgkOT2c6IpsU3iJTKSTCQgclPJPLUcyqacsknOeuB4pMKnsjpuvDsgjms8Li8EhQoiErCmqWVAbtyj3b64ncV30wVDjrjkGBDHsbjqQSmpWvDH3fYnxWRhNmxau6FpCWhybdpJg1DvFPUZHrs6pAhf146d2QGMSwKOBUl0ZGPMqreeVS'
))