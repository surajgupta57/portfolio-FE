import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// api url
const baseUrl = "http://127.0.0.1:8000/api";

// Jumbo Section
export const JumboDetails = createApi({
  reducerPath: "JumboDetails",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getJumboDetails: builder.query({
      query: () => "/jumbo",
    }),
  }),
});

// About
export const AboutMe = createApi({
  reducerPath: "AboutMe",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAboutMe: builder.query({
      query: () => "/me",
    }),
  }),
});

// Services
export const Services = createApi({
  reducerPath: "Services",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/works-todo",
    }),
  }),
});

// Skills
export const Progress = createApi({
  reducerPath: "Progress",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProgress: builder.query({
      query: () => "/progress-bar",
    }),
  }),
});

// Projects
export const Projects = createApi({
  reducerPath: "Projects",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
    }),
  }),
});

// Contacts
export const Contacts = createApi({
  reducerPath: "Contacts",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contact-us",
    }),
  }),
});

// Social Media
export const SocialMedia = createApi({
  reducerPath: "SocialMedia",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSocialMedia: builder.query({
      query: () => "/social-media",
    }),
  }),
});

// Languages Icons
export const LanguagesIcons = createApi({
  reducerPath: "LanguagesIcons",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getLanguagesIcons: builder.query({
      query: () => "/technologies",
    }),
  }),
});

export const { useGetJumboDetailsQuery } = JumboDetails;
export const { useGetAboutMeQuery } = AboutMe;
export const { useGetServicesQuery } = Services;
export const { useGetProgressQuery } = Progress;
export const { useGetProjectsQuery } = Projects;
export const { useGetContactsQuery } = Contacts;
export const { useGetSocialMediaQuery } = SocialMedia;
export const { useGetLanguagesIconsQuery } = LanguagesIcons;
