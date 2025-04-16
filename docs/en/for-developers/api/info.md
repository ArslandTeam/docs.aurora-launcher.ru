# General information

:::warning
This section in the development
:::

API for communication between the Launcher and the Launcher Server, released via the [Aurora RPC](https://rpc.aurora-team.ru) library.\
Information about the library and the protocol used can be found [here](https://rpc.aurora-team.ru/guide/introduction.html).

Below are the API methods available for use in the launcher.

## Similarities and differences with JSON-RPC

The Aurora RPC protocol is based on the JSON-RPC 2.0 standard. It implements a similar request and response structure, except for the absence of the `jsonrpc` parameter:

```ts
interface Request {
  id?: number | string; // Not required for notifications
  method: string;
  params?: object | array; // Not required for notifications
}

interface Response {
  id: number | string;
  result: object | array;
}
```

When returning an error, the following type is used:

```ts
interface ResponseError {
  id: number | string;
  error: {
    code: number;
    message: string;
  };
}
```

The error codes correspond to those used in JSON-RPC:

::: warning
Error codes from -32768 to -32000 inclusive are reserved for previously defined errors. Any code in this range, but not explicitly defined below, is reserved for future use.
:::

| Код    | Сообщение        | Значение                                                                                   |
| ------ | ---------------- | ------------------------------------------------------------------------------------------ |
| -32700 | Parse error      | The server received invalid JSON. The server encountered an error parsing the JSON text.   |
| -32600 | Invalid Request  | The JSON sent is not a valid request object.                                               |
| -32601 | Method not found | Method does not exist / is not available.                                                  |
| -32602 | Invalid params   | Invalid method parameter(s).                                                               |
| -32603 | Internal error   | Aurora RPC internal error.                                                                 |
| -32500 | Response error   | Standard request error. Returned if no error code was defined.                             |

Below are the API methods available for use in Launcher.

## Auth

To work with the API on behalf of the launcher, you need to pass auth. To do this, you need to send an `auth` request with the following content:

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "method": "auth",
  "params": {
    "login": "login123",
    "password": "password456"
  }
}
```

The response is returned in the following format:

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "result": {
    "login": "login123",
    "userUUID": "00000000-0000-0000-0000-000000000000",
    "accessToken": "00000000-0000-0000-0000-000000000000"
  }
}
```

When using RejectProvider you get a standard ResponseError:

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "error": {
    "code": 200,
    "message": "Auth rejected"
  }
}
```

The returned message can be overridden in the Launcher Server config.
