import * as Sentry from "@sentry/react-router";

Sentry.init({
    dsn: "https://6ee4c91c2f2ebffe495cc7abd3b9a439@o4509647736864768.ingest.us.sentry.io/4509647740731392",

    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
});

