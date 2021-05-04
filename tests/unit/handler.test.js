import handler, {sendError} from "lib/api/handler";
import { HTTPError } from "lib/utils";

describe("Error sending", () => {
  it("should return HTTPError", () => {
    const resMock = {};
    resMock.status = jest.fn().mockReturnValue(resMock);
    resMock.json = jest.fn().mockReturnValue(resMock);
    const errorMock = new HTTPError(405, "Massage");
    sendError(resMock, errorMock);
    expect(resMock.status).toHaveBeenCalledWith(405);
    expect(resMock.json).toHaveBeenCalledWith({error: "Massage"});
  })
  it("should return Error", () => {
    const resMock = {};
    resMock.status = jest.fn().mockReturnValue(resMock);
    resMock.json = jest.fn().mockReturnValue(resMock);
    const errorMock = new Error("Massage");
    sendError(resMock, errorMock);
    expect(resMock.status).toHaveBeenCalledWith(500);
    expect(resMock.json).toHaveBeenCalledWith({error: "Massage"});
  })
  it("should not return HTTPError, nor Error with empty error object", () => {
    const resMock = {};
    resMock.status = jest.fn().mockReturnValue(resMock);
    resMock.json = jest.fn().mockReturnValue(resMock);
    const errorMock = {};
    sendError(resMock, errorMock);
    expect(resMock.status).toHaveBeenCalledWith(500);
    expect(resMock.json).toHaveBeenCalledWith({error: "Damn, something went real bad..."});
  })
  it("should not return HTTPError, nor Error with null error object", () => {
    const resMock = {};
    resMock.status = jest.fn().mockReturnValue(resMock);
    resMock.json = jest.fn().mockReturnValue(resMock);
    const errorMock = null;
    sendError(resMock, errorMock);
    expect(resMock.status).toHaveBeenCalledWith(500);
    expect(resMock.json).toHaveBeenCalledWith({error: "Damn, something went real bad..."});
  })
  it("should not return HTTPError, nor Error with number", () => {
    const resMock = {};
    resMock.status = jest.fn().mockReturnValue(resMock);
    resMock.json = jest.fn().mockReturnValue(resMock);
    const errorMock = 42;
    sendError(resMock, errorMock);
    expect(resMock.status).toHaveBeenCalledWith(500);
    expect(resMock.json).toHaveBeenCalledWith({error: "Damn, something went real bad..."});
  })
  it("should not return HTTPError, nor Error with string", () => {
    const resMock = {};
    resMock.status = jest.fn().mockReturnValue(resMock);
    resMock.json = jest.fn().mockReturnValue(resMock);
    const errorMock = "Error";
    sendError(resMock, errorMock);
    expect(resMock.status).toHaveBeenCalledWith(500);
    expect(resMock.json).toHaveBeenCalledWith({error: "Damn, something went real bad..."});
  })
});

describe("Handler", () => {
  it("should throw error, if bad argument given", () => {
    expect(() => {
      handler({ GTE: () => {} });
    }).toThrow("Invalid method in mapping");
    expect(() => {
      handler({ get: () => {} });
    }).toThrow("Invalid method in mapping");
    expect(() => {
      handler({ "": () => {} });
    }).toThrow("Invalid method in mapping");
    expect(() => {
      handler({ gET: () => {} });
    }).toThrow("Invalid method in mapping");
  });
  it("should throw error, if given argument is not a function", () => {
      expect(() => {
          handler({ GET: "" });
      }).toThrow("Methods value is not a function");
  })
  it("should return with a function wich handles invalid request methods correctly", () => {
    const returningFunc = handler({ GET: () => {} });
    const reqMock = {method : "POST"};
    const resMock = {};
    resMock.setHeader = jest.fn();
    resMock.status = jest.fn().mockReturnValue(resMock);
    resMock.json = jest.fn().mockReturnValue(resMock);
    returningFunc(reqMock, resMock);
    expect(resMock.setHeader).toHaveBeenCalledWith("Allow", ["GET"]);
  });
  it("should return with a function wich handles request methods correctly", () => {
    const mapping = {GET: jest.fn()};
    const returningFunc = handler(mapping);
    const reqMock = {method : "GET"};
    const resMock = {};
    resMock.setHeader = jest.fn();
    resMock.status = jest.fn().mockReturnValue(resMock);
    resMock.json = jest.fn().mockReturnValue(resMock);
    returningFunc(reqMock, resMock);
    expect(mapping.GET).toHaveBeenCalledWith(reqMock, resMock);
  });
});
