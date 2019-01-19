// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Flyd = require("../Flyd.bs.js");
var Jest = require("@glennsl/bs-jest/src/jest.js");
var Flyd$1 = require("flyd");

var emptyStrm = Flyd.make(undefined, /* () */0);

var strm = Flyd.make(2, /* () */0);

describe("Flyd", (function () {
        Jest.test("#stream empty - no value ", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return (function (param) {
                                          return Flyd$1.stream(param);
                                        });
                                    }))));
              }));
        Jest.test("#stream with value", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return Flyd$1.stream(4);
                                    }))));
              }));
        Jest.test("#combine", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return (function (param) {
                                                  return strm;
                                                }).combine(/* array */[emptyStrm]);
                                    }))));
              }));
        Jest.test("#combine1", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return (function (param) {
                                                  return strm;
                                                }).combine(emptyStrm);
                                    }))));
              }));
        Jest.test("#combine2", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return (function (param) {
                                                  return strm;
                                                }).combine(emptyStrm, emptyStrm);
                                    }))));
              }));
        Jest.test("#isStream - true", (function (param) {
                return Jest.ExpectJs[/* toBeTruthy */28](Jest.ExpectJs[/* expect */0]((function (param) {
                                  return Flyd.make(undefined, /* () */0).isStream();
                                })));
              }));
        Jest.test("#isStream - false", (function (param) {
                return Jest.ExpectJs[/* toBeFalsy */26](Jest.ExpectJs[/* expect */0]((function (param) {
                                  return (5).isStream();
                                })));
              }));
        Jest.test("#immediate", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return emptyStrm.immediate();
                                    }))));
              }));
        Jest.test("#endsOn", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return strm.endsOn(emptyStrm);
                                    }))));
              }));
        Jest.test("#map", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return (function (x) {
                                                  return x;
                                                }).map(strm);
                                    }))));
              }));
        Jest.test("#chain", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return (function (x) {
                                                  return x;
                                                }).chain(strm);
                                    }))));
              }));
        Jest.test("#ap", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return strm.ap((function (x) {
                                                    return x;
                                                  }));
                                    }))));
              }));
        Jest.test("#on", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return (function (x) {
                                                  return x;
                                                }).on(strm);
                                    }))));
              }));
        Jest.test("#scan", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      var partial_arg = function (param) {
                                        return Flyd$1.stream(param);
                                      };
                                      return (function (param) {
                                          return (function (x) {
                                                      return x;
                                                    }).scan(partial_arg, param);
                                        });
                                    }))));
              }));
        Jest.test("#merge", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return strm.merge(emptyStrm);
                                    }))));
              }));
        Jest.test("#transduce", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return (function (x) {
                                                  return x;
                                                }).transduce(strm);
                                    }))));
              }));
        Jest.test("#curryN", (function (param) {
                return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                      return (5).curryN((function (x) {
                                                    return x;
                                                  }));
                                    }))));
              }));
        return Jest.test("#fromPromise", (function (param) {
                      return Jest.ExpectJs[/* toThrow */18](Jest.ExpectJs[/* not_ */23](Jest.ExpectJs[/* expect */0]((function (param) {
                                            return new Promise((function (resolve, reject) {
                                                            return resolve(2);
                                                          })).fromPromise();
                                          }))));
                    }));
      }));

exports.emptyStrm = emptyStrm;
exports.strm = strm;
/* emptyStrm Not a pure module */
