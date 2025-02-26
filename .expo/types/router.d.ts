/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Profile` | `/Profile`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `${'/(tabs)'}/[detail]` | `/[detail]`, params: Router.UnknownInputParams & { detail: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Profile` | `/Profile`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } } | { pathname: `${'/(tabs)'}/[detail]` | `/[detail]`, params: Router.UnknownOutputParams & { detail: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/explore${`?${string}` | `#${string}` | ''}` | `/explore${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Profile${`?${string}` | `#${string}` | ''}` | `/Profile${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Profile` | `/Profile`; params?: Router.UnknownInputParams; } | `/+not-found` | `${'/(tabs)'}/${Router.SingleRoutePart<T>}` | `/${Router.SingleRoutePart<T>}` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `${'/(tabs)'}/[detail]` | `/[detail]`, params: Router.UnknownInputParams & { detail: string | number; } };
    }
  }
}
