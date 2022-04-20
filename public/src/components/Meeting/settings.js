import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "8dd4b8506d154536bd72498aa5a7e1f8";
const token =
  "0068dd4b8506d154536bd72498aa5a7e1f8IAAFl8TPrUqeTO6rcmg7YaG9yXI7ulCVpeJmVKUgnJ8wImTNKL8AAAAAEACKbcvBKChhYgEAAQAoKGFi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
