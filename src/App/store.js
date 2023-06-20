import { configureStore } from "@reduxjs/toolkit";
import {
  JumboDetails,
  AboutMe,
  Services,
  Progress,
  Projects,
  Contacts,
  SocialMedia,
  LanguagesIcons,
  Testimonials,
} from "../Api/api";

export default configureStore({
  reducer: {
    [JumboDetails.reducerPath]: JumboDetails.reducer,
    [AboutMe.reducerPath]: AboutMe.reducer,
    [Services.reducerPath]: Services.reducer,
    [Progress.reducerPath]: Progress.reducer,
    [Projects.reducerPath]: Projects.reducer,
    [Contacts.reducerPath]: Contacts.reducer,
    [SocialMedia.reducerPath]: SocialMedia.reducer,
    [LanguagesIcons.reducerPath]: LanguagesIcons.reducer,
    [Testimonials.reducerPath]: Testimonials.reducer,
  },
});
