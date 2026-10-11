self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json|\\/?index(?:\\.rsc|\\.segments\\/.+\\.segment\\.rsc)))?[\\/#\\?]?$",
    "originalSource": "/"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/home(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/home"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/games(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/games/:path*"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/catalog(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/catalog/:path*"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/avatar(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/avatar"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/My\\/Character\\.aspx(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/My/Character.aspx"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/groups(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/groups"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/users(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/users/:path*"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/download(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/download"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()