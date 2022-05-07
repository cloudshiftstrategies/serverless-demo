var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/lambda-1.ts
var lambda_1_exports = {};
__export(lambda_1_exports, {
  handler: () => handler
});
function handler(event) {
  return __async(this, null, function* () {
    let statusCode;
    let body;
    try {
      const { word } = JSON.parse(event.body);
      statusCode = 200;
      body = {
        upperCaseWord: word.toUpperCase()
      };
    } catch (err) {
      statusCode = 400;
    }
    return {
      statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(body)
    };
  });
}
module.exports = __toCommonJS(lambda_1_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2xhbWJkYS0xLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihldmVudDogYW55KSB7XG4gICAgbGV0IHN0YXR1c0NvZGVcbiAgICBsZXQgYm9keVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gXCJib2R5XCIgd2lsbCBjb21lIGZyb20gQVBJIEdhdGV3YXkgYXMgcGxhaW4gdGV4dFxuICAgICAgICBjb25zdCB7IHdvcmQgfSA9IEpTT04ucGFyc2UoZXZlbnQuYm9keSlcblxuICAgICAgICBzdGF0dXNDb2RlID0gMjAwXG4gICAgICAgIGJvZHkgPSB7XG4gICAgICAgICAgICB1cHBlckNhc2VXb3JkOiB3b3JkLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHN0YXR1c0NvZGUgPSA0MDBcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gb2JqZWN0IHJlcXVpcmVkIGJ5IEFQSSBHYXRld2F5XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscyc6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgICB9XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE4QixPQUFZO0FBQUE7QUFDdEMsUUFBSTtBQUNKLFFBQUk7QUFFSixRQUFJO0FBRUEsWUFBTSxFQUFFLFNBQVMsS0FBSyxNQUFNLE1BQU07QUFFbEMsbUJBQWE7QUFDYixhQUFPO0FBQUEsUUFDSCxlQUFlLEtBQUs7QUFBQTtBQUFBLGFBR3JCLEtBQVA7QUFDSSxtQkFBYTtBQUFBO0FBSWpCLFdBQU87QUFBQSxNQUNIO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDTCwrQkFBK0I7QUFBQSxRQUMvQixvQ0FBb0M7QUFBQTtBQUFBLE1BRXhDLE1BQU0sS0FBSyxVQUFVO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
