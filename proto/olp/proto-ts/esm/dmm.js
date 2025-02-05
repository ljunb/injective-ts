/* eslint-disable */
import { grpc } from "@injectivelabs/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Timestamp } from "./google/protobuf/timestamp.js";
export const protobufPackage = "injective_dmm_v2_rpc";
function createBasePagination() {
    return { from: undefined, height: undefined, perPage: undefined, total: undefined };
}
export const Pagination = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== undefined) {
            writer.uint32(8).int32(message.from);
        }
        if (message.height !== undefined) {
            writer.uint32(16).int32(message.height);
        }
        if (message.perPage !== undefined) {
            writer.uint32(24).int32(message.perPage);
        }
        if (message.total !== undefined) {
            writer.uint32(32).int32(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePagination();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.int32();
                    break;
                case 2:
                    message.height = reader.int32();
                    break;
                case 3:
                    message.perPage = reader.int32();
                    break;
                case 4:
                    message.total = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? Number(object.from) : undefined,
            height: isSet(object.height) ? Number(object.height) : undefined,
            perPage: isSet(object.perPage) ? Number(object.perPage) : undefined,
            total: isSet(object.total) ? Number(object.total) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = Math.round(message.from));
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.perPage !== undefined && (obj.perPage = Math.round(message.perPage));
        message.total !== undefined && (obj.total = Math.round(message.total));
        return obj;
    },
    create(base) {
        return Pagination.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePagination();
        message.from = object.from ?? undefined;
        message.height = object.height ?? undefined;
        message.perPage = object.perPage ?? undefined;
        message.total = object.total ?? undefined;
        return message;
    },
};
function createBaseGetEpochsRequest() {
    return { status: "" };
}
export const GetEpochsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return GetEpochsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetEpochsRequest();
        message.status = object.status ?? "";
        return message;
    },
};
function createBaseGetEpochsResponse() {
    return { epochs: [] };
}
export const GetEpochsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.epochs) {
            EpochV2.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochs.push(EpochV2.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { epochs: Array.isArray(object?.epochs) ? object.epochs.map((e) => EpochV2.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map((e) => e ? EpochV2.toJSON(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        return obj;
    },
    create(base) {
        return GetEpochsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetEpochsResponse();
        message.epochs = object.epochs?.map((e) => EpochV2.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetTotalScoresRequest() {
    return { epochId: "", marketId: "", page: undefined };
}
export const GetTotalScoresRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.page !== undefined) {
            Pagination.encode(message.page, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalScoresRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.page = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            page: isSet(object.page) ? Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.page !== undefined && (obj.page = message.page ? Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return GetTotalScoresRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetTotalScoresRequest();
        message.epochId = object.epochId ?? "";
        message.marketId = object.marketId ?? "";
        message.page = (object.page !== undefined && object.page !== null)
            ? Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetTotalScoresResponse() {
    return { scores: [], next: undefined };
}
export const GetTotalScoresResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.scores) {
            TotalScore.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalScoresResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scores.push(TotalScore.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.next = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            scores: Array.isArray(object?.scores) ? object.scores.map((e) => TotalScore.fromJSON(e)) : [],
            next: isSet(object.next) ? Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.scores) {
            obj.scores = message.scores.map((e) => e ? TotalScore.toJSON(e) : undefined);
        }
        else {
            obj.scores = [];
        }
        message.next !== undefined && (obj.next = message.next ? Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return GetTotalScoresResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetTotalScoresResponse();
        message.scores = object.scores?.map((e) => TotalScore.fromPartial(e)) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetTotalScoresHistoryRequest() {
    return { epochId: "", marketId: "", accountAddress: "", page: undefined };
}
export const GetTotalScoresHistoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(26).string(message.accountAddress);
        }
        if (message.page !== undefined) {
            Pagination.encode(message.page, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalScoresHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.accountAddress = reader.string();
                    break;
                case 4:
                    message.page = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            page: isSet(object.page) ? Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.page !== undefined && (obj.page = message.page ? Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return GetTotalScoresHistoryRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetTotalScoresHistoryRequest();
        message.epochId = object.epochId ?? "";
        message.marketId = object.marketId ?? "";
        message.accountAddress = object.accountAddress ?? "";
        message.page = (object.page !== undefined && object.page !== null)
            ? Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetTotalScoresHistoryResponse() {
    return { scores: [], next: undefined };
}
export const GetTotalScoresHistoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.scores) {
            TotalScore.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTotalScoresHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scores.push(TotalScore.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.next = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            scores: Array.isArray(object?.scores) ? object.scores.map((e) => TotalScore.fromJSON(e)) : [],
            next: isSet(object.next) ? Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.scores) {
            obj.scores = message.scores.map((e) => e ? TotalScore.toJSON(e) : undefined);
        }
        else {
            obj.scores = [];
        }
        message.next !== undefined && (obj.next = message.next ? Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return GetTotalScoresHistoryResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetTotalScoresHistoryResponse();
        message.scores = object.scores?.map((e) => TotalScore.fromPartial(e)) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetEpochScoresRequest() {
    return { epochId: "", page: undefined };
}
export const GetEpochScoresRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.page !== undefined) {
            Pagination.encode(message.page, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochScoresRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.page = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            page: isSet(object.page) ? Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.page !== undefined && (obj.page = message.page ? Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return GetEpochScoresRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetEpochScoresRequest();
        message.epochId = object.epochId ?? "";
        message.page = (object.page !== undefined && object.page !== null)
            ? Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetEpochScoresResponse() {
    return { scores: [], next: undefined };
}
export const GetEpochScoresResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.scores) {
            EpochScore.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochScoresResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scores.push(EpochScore.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.next = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            scores: Array.isArray(object?.scores) ? object.scores.map((e) => EpochScore.fromJSON(e)) : [],
            next: isSet(object.next) ? Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.scores) {
            obj.scores = message.scores.map((e) => e ? EpochScore.toJSON(e) : undefined);
        }
        else {
            obj.scores = [];
        }
        message.next !== undefined && (obj.next = message.next ? Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return GetEpochScoresResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetEpochScoresResponse();
        message.scores = object.scores?.map((e) => EpochScore.fromPartial(e)) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetEpochScoresHistoryRequest() {
    return { epochId: "", accountAddress: "", page: undefined };
}
export const GetEpochScoresHistoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.page !== undefined) {
            Pagination.encode(message.page, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochScoresHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.accountAddress = reader.string();
                    break;
                case 3:
                    message.page = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            page: isSet(object.page) ? Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.page !== undefined && (obj.page = message.page ? Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return GetEpochScoresHistoryRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetEpochScoresHistoryRequest();
        message.epochId = object.epochId ?? "";
        message.accountAddress = object.accountAddress ?? "";
        message.page = (object.page !== undefined && object.page !== null)
            ? Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetEpochScoresHistoryResponse() {
    return { scores: [], next: undefined };
}
export const GetEpochScoresHistoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.scores) {
            EpochScore.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEpochScoresHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scores.push(EpochScore.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.next = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            scores: Array.isArray(object?.scores) ? object.scores.map((e) => EpochScore.fromJSON(e)) : [],
            next: isSet(object.next) ? Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.scores) {
            obj.scores = message.scores.map((e) => e ? EpochScore.toJSON(e) : undefined);
        }
        else {
            obj.scores = [];
        }
        message.next !== undefined && (obj.next = message.next ? Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return GetEpochScoresHistoryResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetEpochScoresHistoryResponse();
        message.scores = object.scores?.map((e) => EpochScore.fromPartial(e)) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetMarketRewardsRequest() {
    return { epochId: "" };
}
export const GetMarketRewardsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMarketRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { epochId: isSet(object.epochId) ? String(object.epochId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        return obj;
    },
    create(base) {
        return GetMarketRewardsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMarketRewardsRequest();
        message.epochId = object.epochId ?? "";
        return message;
    },
};
function createBaseGetMarketRewardsResponse() {
    return { rewards: [] };
}
export const GetMarketRewardsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            MarketReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMarketRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(MarketReward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => MarketReward.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? MarketReward.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    create(base) {
        return GetMarketRewardsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMarketRewardsResponse();
        message.rewards = object.rewards?.map((e) => MarketReward.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetEligibleAddressesRequest() {
    return { epochId: "", page: undefined };
}
export const GetEligibleAddressesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.page !== undefined) {
            Pagination.encode(message.page, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEligibleAddressesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 3:
                    message.page = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            page: isSet(object.page) ? Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.page !== undefined && (obj.page = message.page ? Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return GetEligibleAddressesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetEligibleAddressesRequest();
        message.epochId = object.epochId ?? "";
        message.page = (object.page !== undefined && object.page !== null)
            ? Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetEligibleAddressesResponse() {
    return { addresses: [], next: undefined };
}
export const GetEligibleAddressesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addresses) {
            EligibleAddress.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEligibleAddressesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(EligibleAddress.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.next = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => EligibleAddress.fromJSON(e)) : [],
            next: isSet(object.next) ? Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e ? EligibleAddress.toJSON(e) : undefined);
        }
        else {
            obj.addresses = [];
        }
        message.next !== undefined && (obj.next = message.next ? Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return GetEligibleAddressesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetEligibleAddressesResponse();
        message.addresses = object.addresses?.map((e) => EligibleAddress.fromPartial(e)) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetRewardsDistributionRequest() {
    return { epochId: "", height: "0", page: undefined };
}
export const GetRewardsDistributionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.page !== undefined) {
            Pagination.encode(message.page, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRewardsDistributionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 3:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.page = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            page: isSet(object.page) ? Pagination.fromJSON(object.page) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.height !== undefined && (obj.height = message.height);
        message.page !== undefined && (obj.page = message.page ? Pagination.toJSON(message.page) : undefined);
        return obj;
    },
    create(base) {
        return GetRewardsDistributionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRewardsDistributionRequest();
        message.epochId = object.epochId ?? "";
        message.height = object.height ?? "0";
        message.page = (object.page !== undefined && object.page !== null)
            ? Pagination.fromPartial(object.page)
            : undefined;
        return message;
    },
};
function createBaseGetRewardsDistributionResponse() {
    return { rewards: [], next: undefined };
}
export const GetRewardsDistributionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            RewardDistribution.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next !== undefined) {
            Pagination.encode(message.next, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRewardsDistributionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(RewardDistribution.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.next = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => RewardDistribution.fromJSON(e)) : [],
            next: isSet(object.next) ? Pagination.fromJSON(object.next) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? RewardDistribution.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        message.next !== undefined && (obj.next = message.next ? Pagination.toJSON(message.next) : undefined);
        return obj;
    },
    create(base) {
        return GetRewardsDistributionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRewardsDistributionResponse();
        message.rewards = object.rewards?.map((e) => RewardDistribution.fromPartial(e)) || [];
        message.next = (object.next !== undefined && object.next !== null)
            ? Pagination.fromPartial(object.next)
            : undefined;
        return message;
    },
};
function createBaseGetAccountVolumesRequest() {
    return { epochId: "", accountAddress: "" };
}
export const GetAccountVolumesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccountVolumesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.accountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return GetAccountVolumesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetAccountVolumesRequest();
        message.epochId = object.epochId ?? "";
        message.accountAddress = object.accountAddress ?? "";
        return message;
    },
};
function createBaseGetAccountVolumesResponse() {
    return { volumes: [] };
}
export const GetAccountVolumesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.volumes) {
            AccountVolume.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccountVolumesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volumes.push(AccountVolume.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { volumes: Array.isArray(object?.volumes) ? object.volumes.map((e) => AccountVolume.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.volumes) {
            obj.volumes = message.volumes.map((e) => e ? AccountVolume.toJSON(e) : undefined);
        }
        else {
            obj.volumes = [];
        }
        return obj;
    },
    create(base) {
        return GetAccountVolumesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetAccountVolumesResponse();
        message.volumes = object.volumes?.map((e) => AccountVolume.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetRewardsEligibilityRequest() {
    return { epochId: "", accountAddress: "" };
}
export const GetRewardsEligibilityRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRewardsEligibilityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.accountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    create(base) {
        return GetRewardsEligibilityRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRewardsEligibilityRequest();
        message.epochId = object.epochId ?? "";
        message.accountAddress = object.accountAddress ?? "";
        return message;
    },
};
function createBaseGetRewardsEligibilityResponse() {
    return {
        volumes: [],
        currentMakerVolumePercentage: "",
        averageDailyMakerVolumePercentage: "",
        eligibleForNextEpoch: false,
        eligibleForCurrentEpoch: false,
        estimatedReward: "",
        updatedAt: undefined,
    };
}
export const GetRewardsEligibilityResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.volumes) {
            AccountVolume.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.currentMakerVolumePercentage !== "") {
            writer.uint32(18).string(message.currentMakerVolumePercentage);
        }
        if (message.averageDailyMakerVolumePercentage !== "") {
            writer.uint32(26).string(message.averageDailyMakerVolumePercentage);
        }
        if (message.eligibleForNextEpoch === true) {
            writer.uint32(32).bool(message.eligibleForNextEpoch);
        }
        if (message.eligibleForCurrentEpoch === true) {
            writer.uint32(48).bool(message.eligibleForCurrentEpoch);
        }
        if (message.estimatedReward !== "") {
            writer.uint32(42).string(message.estimatedReward);
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRewardsEligibilityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volumes.push(AccountVolume.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.currentMakerVolumePercentage = reader.string();
                    break;
                case 3:
                    message.averageDailyMakerVolumePercentage = reader.string();
                    break;
                case 4:
                    message.eligibleForNextEpoch = reader.bool();
                    break;
                case 6:
                    message.eligibleForCurrentEpoch = reader.bool();
                    break;
                case 5:
                    message.estimatedReward = reader.string();
                    break;
                case 7:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            volumes: Array.isArray(object?.volumes) ? object.volumes.map((e) => AccountVolume.fromJSON(e)) : [],
            currentMakerVolumePercentage: isSet(object.currentMakerVolumePercentage)
                ? String(object.currentMakerVolumePercentage)
                : "",
            averageDailyMakerVolumePercentage: isSet(object.averageDailyMakerVolumePercentage)
                ? String(object.averageDailyMakerVolumePercentage)
                : "",
            eligibleForNextEpoch: isSet(object.eligibleForNextEpoch) ? Boolean(object.eligibleForNextEpoch) : false,
            eligibleForCurrentEpoch: isSet(object.eligibleForCurrentEpoch) ? Boolean(object.eligibleForCurrentEpoch) : false,
            estimatedReward: isSet(object.estimatedReward) ? String(object.estimatedReward) : "",
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.volumes) {
            obj.volumes = message.volumes.map((e) => e ? AccountVolume.toJSON(e) : undefined);
        }
        else {
            obj.volumes = [];
        }
        message.currentMakerVolumePercentage !== undefined &&
            (obj.currentMakerVolumePercentage = message.currentMakerVolumePercentage);
        message.averageDailyMakerVolumePercentage !== undefined &&
            (obj.averageDailyMakerVolumePercentage = message.averageDailyMakerVolumePercentage);
        message.eligibleForNextEpoch !== undefined && (obj.eligibleForNextEpoch = message.eligibleForNextEpoch);
        message.eligibleForCurrentEpoch !== undefined && (obj.eligibleForCurrentEpoch = message.eligibleForCurrentEpoch);
        message.estimatedReward !== undefined && (obj.estimatedReward = message.estimatedReward);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return GetRewardsEligibilityResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRewardsEligibilityResponse();
        message.volumes = object.volumes?.map((e) => AccountVolume.fromPartial(e)) || [];
        message.currentMakerVolumePercentage = object.currentMakerVolumePercentage ?? "";
        message.averageDailyMakerVolumePercentage = object.averageDailyMakerVolumePercentage ?? "";
        message.eligibleForNextEpoch = object.eligibleForNextEpoch ?? false;
        message.eligibleForCurrentEpoch = object.eligibleForCurrentEpoch ?? false;
        message.estimatedReward = object.estimatedReward ?? "";
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};
function createBaseGetHealthStatusRequest() {
    return {};
}
export const GetHealthStatusRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetHealthStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return GetHealthStatusRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetHealthStatusRequest();
        return message;
    },
};
function createBaseGetHealthStatusResponse() {
    return {
        epochId: "",
        lastSnapshotBlockTime: undefined,
        lastSnapshotBlockHeight: "0",
        updatedAt: undefined,
        status: "",
    };
}
export const GetHealthStatusResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.lastSnapshotBlockTime !== undefined) {
            Timestamp.encode(toTimestamp(message.lastSnapshotBlockTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.lastSnapshotBlockHeight !== "0") {
            writer.uint32(24).int64(message.lastSnapshotBlockHeight);
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.status !== "") {
            writer.uint32(42).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetHealthStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.lastSnapshotBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastSnapshotBlockHeight = longToString(reader.int64());
                    break;
                case 4:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            lastSnapshotBlockTime: isSet(object.lastSnapshotBlockTime)
                ? fromJsonTimestamp(object.lastSnapshotBlockTime)
                : undefined,
            lastSnapshotBlockHeight: isSet(object.lastSnapshotBlockHeight) ? String(object.lastSnapshotBlockHeight) : "0",
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
            status: isSet(object.status) ? String(object.status) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.lastSnapshotBlockTime !== undefined &&
            (obj.lastSnapshotBlockTime = message.lastSnapshotBlockTime.toISOString());
        message.lastSnapshotBlockHeight !== undefined && (obj.lastSnapshotBlockHeight = message.lastSnapshotBlockHeight);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return GetHealthStatusResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetHealthStatusResponse();
        message.epochId = object.epochId ?? "";
        message.lastSnapshotBlockTime = object.lastSnapshotBlockTime ?? undefined;
        message.lastSnapshotBlockHeight = object.lastSnapshotBlockHeight ?? "0";
        message.updatedAt = object.updatedAt ?? undefined;
        message.status = object.status ?? "";
        return message;
    },
};
function createBaseEpochV2() {
    return {
        epochId: "",
        status: "",
        startHeight: "0",
        endHeight: "0",
        snapshotCount: 0,
        resultCount: 0,
        config: undefined,
        createdAt: undefined,
        updatedAt: undefined,
    };
}
export const EpochV2 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.status !== "") {
            writer.uint32(18).string(message.status);
        }
        if (message.startHeight !== "0") {
            writer.uint32(24).int64(message.startHeight);
        }
        if (message.endHeight !== "0") {
            writer.uint32(32).int64(message.endHeight);
        }
        if (message.snapshotCount !== 0) {
            writer.uint32(40).int32(message.snapshotCount);
        }
        if (message.resultCount !== 0) {
            writer.uint32(48).int32(message.resultCount);
        }
        if (message.config !== undefined) {
            EpochConfigV2.encode(message.config, writer.uint32(58).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.startHeight = longToString(reader.int64());
                    break;
                case 4:
                    message.endHeight = longToString(reader.int64());
                    break;
                case 5:
                    message.snapshotCount = reader.int32();
                    break;
                case 6:
                    message.resultCount = reader.int32();
                    break;
                case 7:
                    message.config = EpochConfigV2.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            status: isSet(object.status) ? String(object.status) : "",
            startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
            endHeight: isSet(object.endHeight) ? String(object.endHeight) : "0",
            snapshotCount: isSet(object.snapshotCount) ? Number(object.snapshotCount) : 0,
            resultCount: isSet(object.resultCount) ? Number(object.resultCount) : 0,
            config: isSet(object.config) ? EpochConfigV2.fromJSON(object.config) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.status !== undefined && (obj.status = message.status);
        message.startHeight !== undefined && (obj.startHeight = message.startHeight);
        message.endHeight !== undefined && (obj.endHeight = message.endHeight);
        message.snapshotCount !== undefined && (obj.snapshotCount = Math.round(message.snapshotCount));
        message.resultCount !== undefined && (obj.resultCount = Math.round(message.resultCount));
        message.config !== undefined && (obj.config = message.config ? EpochConfigV2.toJSON(message.config) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return EpochV2.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEpochV2();
        message.epochId = object.epochId ?? "";
        message.status = object.status ?? "";
        message.startHeight = object.startHeight ?? "0";
        message.endHeight = object.endHeight ?? "0";
        message.snapshotCount = object.snapshotCount ?? 0;
        message.resultCount = object.resultCount ?? 0;
        message.config = (object.config !== undefined && object.config !== null)
            ? EpochConfigV2.fromPartial(object.config)
            : undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};
function createBaseMarket() {
    return { marketId: "", ticker: "", startDate: undefined, preAllocatedReward: undefined };
}
export const Market = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(26).fork()).ldelim();
        }
        if (message.preAllocatedReward !== undefined) {
            writer.uint32(34).string(message.preAllocatedReward);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.preAllocatedReward = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
            preAllocatedReward: isSet(object.preAllocatedReward) ? String(object.preAllocatedReward) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
        message.preAllocatedReward !== undefined && (obj.preAllocatedReward = message.preAllocatedReward);
        return obj;
    },
    create(base) {
        return Market.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMarket();
        message.marketId = object.marketId ?? "";
        message.ticker = object.ticker ?? "";
        message.startDate = object.startDate ?? undefined;
        message.preAllocatedReward = object.preAllocatedReward ?? undefined;
        return message;
    },
};
function createBaseEpochConfigV2() {
    return {
        number: 0,
        startDate: undefined,
        endDate: undefined,
        rewardInj: "",
        markets: [],
        liquidityScoreExponent: "",
        uptimeExponent: "",
        volumeExponent: "",
        permanenceVolumeThreshold: "",
        qualifyingVolumeThreshold: "",
    };
}
export const EpochConfigV2 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.number !== 0) {
            writer.uint32(80).int32(message.number);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(10).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.rewardInj !== "") {
            writer.uint32(26).string(message.rewardInj);
        }
        for (const v of message.markets) {
            Market.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.liquidityScoreExponent !== "") {
            writer.uint32(42).string(message.liquidityScoreExponent);
        }
        if (message.uptimeExponent !== "") {
            writer.uint32(50).string(message.uptimeExponent);
        }
        if (message.volumeExponent !== "") {
            writer.uint32(58).string(message.volumeExponent);
        }
        if (message.permanenceVolumeThreshold !== "") {
            writer.uint32(66).string(message.permanenceVolumeThreshold);
        }
        if (message.qualifyingVolumeThreshold !== "") {
            writer.uint32(74).string(message.qualifyingVolumeThreshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochConfigV2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 10:
                    message.number = reader.int32();
                    break;
                case 1:
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.rewardInj = reader.string();
                    break;
                case 4:
                    message.markets.push(Market.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.liquidityScoreExponent = reader.string();
                    break;
                case 6:
                    message.uptimeExponent = reader.string();
                    break;
                case 7:
                    message.volumeExponent = reader.string();
                    break;
                case 8:
                    message.permanenceVolumeThreshold = reader.string();
                    break;
                case 9:
                    message.qualifyingVolumeThreshold = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            number: isSet(object.number) ? Number(object.number) : 0,
            startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
            endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
            rewardInj: isSet(object.rewardInj) ? String(object.rewardInj) : "",
            markets: Array.isArray(object?.markets) ? object.markets.map((e) => Market.fromJSON(e)) : [],
            liquidityScoreExponent: isSet(object.liquidityScoreExponent) ? String(object.liquidityScoreExponent) : "",
            uptimeExponent: isSet(object.uptimeExponent) ? String(object.uptimeExponent) : "",
            volumeExponent: isSet(object.volumeExponent) ? String(object.volumeExponent) : "",
            permanenceVolumeThreshold: isSet(object.permanenceVolumeThreshold)
                ? String(object.permanenceVolumeThreshold)
                : "",
            qualifyingVolumeThreshold: isSet(object.qualifyingVolumeThreshold)
                ? String(object.qualifyingVolumeThreshold)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
        message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
        message.rewardInj !== undefined && (obj.rewardInj = message.rewardInj);
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? Market.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        message.liquidityScoreExponent !== undefined && (obj.liquidityScoreExponent = message.liquidityScoreExponent);
        message.uptimeExponent !== undefined && (obj.uptimeExponent = message.uptimeExponent);
        message.volumeExponent !== undefined && (obj.volumeExponent = message.volumeExponent);
        message.permanenceVolumeThreshold !== undefined &&
            (obj.permanenceVolumeThreshold = message.permanenceVolumeThreshold);
        message.qualifyingVolumeThreshold !== undefined &&
            (obj.qualifyingVolumeThreshold = message.qualifyingVolumeThreshold);
        return obj;
    },
    create(base) {
        return EpochConfigV2.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEpochConfigV2();
        message.number = object.number ?? 0;
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.rewardInj = object.rewardInj ?? "";
        message.markets = object.markets?.map((e) => Market.fromPartial(e)) || [];
        message.liquidityScoreExponent = object.liquidityScoreExponent ?? "";
        message.uptimeExponent = object.uptimeExponent ?? "";
        message.volumeExponent = object.volumeExponent ?? "";
        message.permanenceVolumeThreshold = object.permanenceVolumeThreshold ?? "";
        message.qualifyingVolumeThreshold = object.qualifyingVolumeThreshold ?? "";
        return message;
    },
};
function createBaseTotalScore() {
    return {
        epochId: "",
        marketId: "",
        accountAddress: "",
        height: "0",
        startHeight: "0",
        blockTime: undefined,
        bid: "",
        ask: "",
        depth: "",
        snapshotCount: 0,
        liquidityScore: "",
        liquidityScorePonderated: "",
        uptimeScore: "",
        bidSnapshot: "",
        askSnapshot: "",
        depthSnapshot: "",
        liquidityScoreSnapshot: "",
        uptimeScoreSnapshot: "",
        uptimeScorePonderated: "",
        uptimePercentage: "",
        startVolume: "",
        currentVolume: "",
        volume: "",
        volumeScore: "",
        volumeScorePonderated: "",
        takerStartVolume: "",
        takerCurrentVolume: "",
        takerVolume: "",
        makerStartVolume: "",
        makerCurrentVolume: "",
        makerVolume: "",
        totalScore: "",
        reward: "",
        rewardPercentage: "",
        createdAt: undefined,
        updatedAt: undefined,
        skip: false,
    };
}
export const TotalScore = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(26).string(message.accountAddress);
        }
        if (message.height !== "0") {
            writer.uint32(32).int64(message.height);
        }
        if (message.startHeight !== "0") {
            writer.uint32(40).int64(message.startHeight);
        }
        if (message.blockTime !== undefined) {
            Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(50).fork()).ldelim();
        }
        if (message.bid !== "") {
            writer.uint32(58).string(message.bid);
        }
        if (message.ask !== "") {
            writer.uint32(66).string(message.ask);
        }
        if (message.depth !== "") {
            writer.uint32(74).string(message.depth);
        }
        if (message.snapshotCount !== 0) {
            writer.uint32(224).int32(message.snapshotCount);
        }
        if (message.liquidityScore !== "") {
            writer.uint32(82).string(message.liquidityScore);
        }
        if (message.liquidityScorePonderated !== "") {
            writer.uint32(90).string(message.liquidityScorePonderated);
        }
        if (message.uptimeScore !== "") {
            writer.uint32(98).string(message.uptimeScore);
        }
        if (message.bidSnapshot !== "") {
            writer.uint32(290).string(message.bidSnapshot);
        }
        if (message.askSnapshot !== "") {
            writer.uint32(298).string(message.askSnapshot);
        }
        if (message.depthSnapshot !== "") {
            writer.uint32(306).string(message.depthSnapshot);
        }
        if (message.liquidityScoreSnapshot !== "") {
            writer.uint32(314).string(message.liquidityScoreSnapshot);
        }
        if (message.uptimeScoreSnapshot !== "") {
            writer.uint32(322).string(message.uptimeScoreSnapshot);
        }
        if (message.uptimeScorePonderated !== "") {
            writer.uint32(106).string(message.uptimeScorePonderated);
        }
        if (message.uptimePercentage !== "") {
            writer.uint32(114).string(message.uptimePercentage);
        }
        if (message.startVolume !== "") {
            writer.uint32(122).string(message.startVolume);
        }
        if (message.currentVolume !== "") {
            writer.uint32(130).string(message.currentVolume);
        }
        if (message.volume !== "") {
            writer.uint32(234).string(message.volume);
        }
        if (message.volumeScore !== "") {
            writer.uint32(138).string(message.volumeScore);
        }
        if (message.volumeScorePonderated !== "") {
            writer.uint32(146).string(message.volumeScorePonderated);
        }
        if (message.takerStartVolume !== "") {
            writer.uint32(242).string(message.takerStartVolume);
        }
        if (message.takerCurrentVolume !== "") {
            writer.uint32(250).string(message.takerCurrentVolume);
        }
        if (message.takerVolume !== "") {
            writer.uint32(258).string(message.takerVolume);
        }
        if (message.makerStartVolume !== "") {
            writer.uint32(266).string(message.makerStartVolume);
        }
        if (message.makerCurrentVolume !== "") {
            writer.uint32(274).string(message.makerCurrentVolume);
        }
        if (message.makerVolume !== "") {
            writer.uint32(282).string(message.makerVolume);
        }
        if (message.totalScore !== "") {
            writer.uint32(178).string(message.totalScore);
        }
        if (message.reward !== "") {
            writer.uint32(186).string(message.reward);
        }
        if (message.rewardPercentage !== "") {
            writer.uint32(194).string(message.rewardPercentage);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(210).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(218).fork()).ldelim();
        }
        if (message.skip === true) {
            writer.uint32(328).bool(message.skip);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalScore();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.accountAddress = reader.string();
                    break;
                case 4:
                    message.height = longToString(reader.int64());
                    break;
                case 5:
                    message.startHeight = longToString(reader.int64());
                    break;
                case 6:
                    message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.bid = reader.string();
                    break;
                case 8:
                    message.ask = reader.string();
                    break;
                case 9:
                    message.depth = reader.string();
                    break;
                case 28:
                    message.snapshotCount = reader.int32();
                    break;
                case 10:
                    message.liquidityScore = reader.string();
                    break;
                case 11:
                    message.liquidityScorePonderated = reader.string();
                    break;
                case 12:
                    message.uptimeScore = reader.string();
                    break;
                case 36:
                    message.bidSnapshot = reader.string();
                    break;
                case 37:
                    message.askSnapshot = reader.string();
                    break;
                case 38:
                    message.depthSnapshot = reader.string();
                    break;
                case 39:
                    message.liquidityScoreSnapshot = reader.string();
                    break;
                case 40:
                    message.uptimeScoreSnapshot = reader.string();
                    break;
                case 13:
                    message.uptimeScorePonderated = reader.string();
                    break;
                case 14:
                    message.uptimePercentage = reader.string();
                    break;
                case 15:
                    message.startVolume = reader.string();
                    break;
                case 16:
                    message.currentVolume = reader.string();
                    break;
                case 29:
                    message.volume = reader.string();
                    break;
                case 17:
                    message.volumeScore = reader.string();
                    break;
                case 18:
                    message.volumeScorePonderated = reader.string();
                    break;
                case 30:
                    message.takerStartVolume = reader.string();
                    break;
                case 31:
                    message.takerCurrentVolume = reader.string();
                    break;
                case 32:
                    message.takerVolume = reader.string();
                    break;
                case 33:
                    message.makerStartVolume = reader.string();
                    break;
                case 34:
                    message.makerCurrentVolume = reader.string();
                    break;
                case 35:
                    message.makerVolume = reader.string();
                    break;
                case 22:
                    message.totalScore = reader.string();
                    break;
                case 23:
                    message.reward = reader.string();
                    break;
                case 24:
                    message.rewardPercentage = reader.string();
                    break;
                case 26:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 27:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 41:
                    message.skip = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
            blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
            bid: isSet(object.bid) ? String(object.bid) : "",
            ask: isSet(object.ask) ? String(object.ask) : "",
            depth: isSet(object.depth) ? String(object.depth) : "",
            snapshotCount: isSet(object.snapshotCount) ? Number(object.snapshotCount) : 0,
            liquidityScore: isSet(object.liquidityScore) ? String(object.liquidityScore) : "",
            liquidityScorePonderated: isSet(object.liquidityScorePonderated) ? String(object.liquidityScorePonderated) : "",
            uptimeScore: isSet(object.uptimeScore) ? String(object.uptimeScore) : "",
            bidSnapshot: isSet(object.bidSnapshot) ? String(object.bidSnapshot) : "",
            askSnapshot: isSet(object.askSnapshot) ? String(object.askSnapshot) : "",
            depthSnapshot: isSet(object.depthSnapshot) ? String(object.depthSnapshot) : "",
            liquidityScoreSnapshot: isSet(object.liquidityScoreSnapshot) ? String(object.liquidityScoreSnapshot) : "",
            uptimeScoreSnapshot: isSet(object.uptimeScoreSnapshot) ? String(object.uptimeScoreSnapshot) : "",
            uptimeScorePonderated: isSet(object.uptimeScorePonderated) ? String(object.uptimeScorePonderated) : "",
            uptimePercentage: isSet(object.uptimePercentage) ? String(object.uptimePercentage) : "",
            startVolume: isSet(object.startVolume) ? String(object.startVolume) : "",
            currentVolume: isSet(object.currentVolume) ? String(object.currentVolume) : "",
            volume: isSet(object.volume) ? String(object.volume) : "",
            volumeScore: isSet(object.volumeScore) ? String(object.volumeScore) : "",
            volumeScorePonderated: isSet(object.volumeScorePonderated) ? String(object.volumeScorePonderated) : "",
            takerStartVolume: isSet(object.takerStartVolume) ? String(object.takerStartVolume) : "",
            takerCurrentVolume: isSet(object.takerCurrentVolume) ? String(object.takerCurrentVolume) : "",
            takerVolume: isSet(object.takerVolume) ? String(object.takerVolume) : "",
            makerStartVolume: isSet(object.makerStartVolume) ? String(object.makerStartVolume) : "",
            makerCurrentVolume: isSet(object.makerCurrentVolume) ? String(object.makerCurrentVolume) : "",
            makerVolume: isSet(object.makerVolume) ? String(object.makerVolume) : "",
            totalScore: isSet(object.totalScore) ? String(object.totalScore) : "",
            reward: isSet(object.reward) ? String(object.reward) : "",
            rewardPercentage: isSet(object.rewardPercentage) ? String(object.rewardPercentage) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
            skip: isSet(object.skip) ? Boolean(object.skip) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.height !== undefined && (obj.height = message.height);
        message.startHeight !== undefined && (obj.startHeight = message.startHeight);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
        message.bid !== undefined && (obj.bid = message.bid);
        message.ask !== undefined && (obj.ask = message.ask);
        message.depth !== undefined && (obj.depth = message.depth);
        message.snapshotCount !== undefined && (obj.snapshotCount = Math.round(message.snapshotCount));
        message.liquidityScore !== undefined && (obj.liquidityScore = message.liquidityScore);
        message.liquidityScorePonderated !== undefined && (obj.liquidityScorePonderated = message.liquidityScorePonderated);
        message.uptimeScore !== undefined && (obj.uptimeScore = message.uptimeScore);
        message.bidSnapshot !== undefined && (obj.bidSnapshot = message.bidSnapshot);
        message.askSnapshot !== undefined && (obj.askSnapshot = message.askSnapshot);
        message.depthSnapshot !== undefined && (obj.depthSnapshot = message.depthSnapshot);
        message.liquidityScoreSnapshot !== undefined && (obj.liquidityScoreSnapshot = message.liquidityScoreSnapshot);
        message.uptimeScoreSnapshot !== undefined && (obj.uptimeScoreSnapshot = message.uptimeScoreSnapshot);
        message.uptimeScorePonderated !== undefined && (obj.uptimeScorePonderated = message.uptimeScorePonderated);
        message.uptimePercentage !== undefined && (obj.uptimePercentage = message.uptimePercentage);
        message.startVolume !== undefined && (obj.startVolume = message.startVolume);
        message.currentVolume !== undefined && (obj.currentVolume = message.currentVolume);
        message.volume !== undefined && (obj.volume = message.volume);
        message.volumeScore !== undefined && (obj.volumeScore = message.volumeScore);
        message.volumeScorePonderated !== undefined && (obj.volumeScorePonderated = message.volumeScorePonderated);
        message.takerStartVolume !== undefined && (obj.takerStartVolume = message.takerStartVolume);
        message.takerCurrentVolume !== undefined && (obj.takerCurrentVolume = message.takerCurrentVolume);
        message.takerVolume !== undefined && (obj.takerVolume = message.takerVolume);
        message.makerStartVolume !== undefined && (obj.makerStartVolume = message.makerStartVolume);
        message.makerCurrentVolume !== undefined && (obj.makerCurrentVolume = message.makerCurrentVolume);
        message.makerVolume !== undefined && (obj.makerVolume = message.makerVolume);
        message.totalScore !== undefined && (obj.totalScore = message.totalScore);
        message.reward !== undefined && (obj.reward = message.reward);
        message.rewardPercentage !== undefined && (obj.rewardPercentage = message.rewardPercentage);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.skip !== undefined && (obj.skip = message.skip);
        return obj;
    },
    create(base) {
        return TotalScore.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTotalScore();
        message.epochId = object.epochId ?? "";
        message.marketId = object.marketId ?? "";
        message.accountAddress = object.accountAddress ?? "";
        message.height = object.height ?? "0";
        message.startHeight = object.startHeight ?? "0";
        message.blockTime = object.blockTime ?? undefined;
        message.bid = object.bid ?? "";
        message.ask = object.ask ?? "";
        message.depth = object.depth ?? "";
        message.snapshotCount = object.snapshotCount ?? 0;
        message.liquidityScore = object.liquidityScore ?? "";
        message.liquidityScorePonderated = object.liquidityScorePonderated ?? "";
        message.uptimeScore = object.uptimeScore ?? "";
        message.bidSnapshot = object.bidSnapshot ?? "";
        message.askSnapshot = object.askSnapshot ?? "";
        message.depthSnapshot = object.depthSnapshot ?? "";
        message.liquidityScoreSnapshot = object.liquidityScoreSnapshot ?? "";
        message.uptimeScoreSnapshot = object.uptimeScoreSnapshot ?? "";
        message.uptimeScorePonderated = object.uptimeScorePonderated ?? "";
        message.uptimePercentage = object.uptimePercentage ?? "";
        message.startVolume = object.startVolume ?? "";
        message.currentVolume = object.currentVolume ?? "";
        message.volume = object.volume ?? "";
        message.volumeScore = object.volumeScore ?? "";
        message.volumeScorePonderated = object.volumeScorePonderated ?? "";
        message.takerStartVolume = object.takerStartVolume ?? "";
        message.takerCurrentVolume = object.takerCurrentVolume ?? "";
        message.takerVolume = object.takerVolume ?? "";
        message.makerStartVolume = object.makerStartVolume ?? "";
        message.makerCurrentVolume = object.makerCurrentVolume ?? "";
        message.makerVolume = object.makerVolume ?? "";
        message.totalScore = object.totalScore ?? "";
        message.reward = object.reward ?? "";
        message.rewardPercentage = object.rewardPercentage ?? "";
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        message.skip = object.skip ?? false;
        return message;
    },
};
function createBaseEpochScore() {
    return {
        epochId: "",
        accountAddress: "",
        height: "0",
        blockTime: undefined,
        startHeight: "0",
        depth: "",
        liquidityScore: "",
        liquidityScorePonderated: "",
        uptimeScore: "",
        uptimeScorePonderated: "",
        uptimePercentage: "",
        volumeScore: "",
        volumeScorePonderated: "",
        totalScore: "",
        volume: "",
        makerVolume: "",
        takerVolume: "",
        reward: "",
        rewardPercentage: "",
        qualifies: false,
        volumePercentage: "",
        createdAt: undefined,
        updatedAt: undefined,
    };
}
export const EpochScore = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.blockTime !== undefined) {
            Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.startHeight !== "0") {
            writer.uint32(40).int64(message.startHeight);
        }
        if (message.depth !== "") {
            writer.uint32(186).string(message.depth);
        }
        if (message.liquidityScore !== "") {
            writer.uint32(50).string(message.liquidityScore);
        }
        if (message.liquidityScorePonderated !== "") {
            writer.uint32(58).string(message.liquidityScorePonderated);
        }
        if (message.uptimeScore !== "") {
            writer.uint32(66).string(message.uptimeScore);
        }
        if (message.uptimeScorePonderated !== "") {
            writer.uint32(74).string(message.uptimeScorePonderated);
        }
        if (message.uptimePercentage !== "") {
            writer.uint32(178).string(message.uptimePercentage);
        }
        if (message.volumeScore !== "") {
            writer.uint32(82).string(message.volumeScore);
        }
        if (message.volumeScorePonderated !== "") {
            writer.uint32(90).string(message.volumeScorePonderated);
        }
        if (message.totalScore !== "") {
            writer.uint32(98).string(message.totalScore);
        }
        if (message.volume !== "") {
            writer.uint32(106).string(message.volume);
        }
        if (message.makerVolume !== "") {
            writer.uint32(114).string(message.makerVolume);
        }
        if (message.takerVolume !== "") {
            writer.uint32(122).string(message.takerVolume);
        }
        if (message.reward !== "") {
            writer.uint32(130).string(message.reward);
        }
        if (message.rewardPercentage !== "") {
            writer.uint32(138).string(message.rewardPercentage);
        }
        if (message.qualifies === true) {
            writer.uint32(144).bool(message.qualifies);
        }
        if (message.volumePercentage !== "") {
            writer.uint32(154).string(message.volumePercentage);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(162).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochScore();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.accountAddress = reader.string();
                    break;
                case 3:
                    message.height = longToString(reader.int64());
                    break;
                case 4:
                    message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.startHeight = longToString(reader.int64());
                    break;
                case 23:
                    message.depth = reader.string();
                    break;
                case 6:
                    message.liquidityScore = reader.string();
                    break;
                case 7:
                    message.liquidityScorePonderated = reader.string();
                    break;
                case 8:
                    message.uptimeScore = reader.string();
                    break;
                case 9:
                    message.uptimeScorePonderated = reader.string();
                    break;
                case 22:
                    message.uptimePercentage = reader.string();
                    break;
                case 10:
                    message.volumeScore = reader.string();
                    break;
                case 11:
                    message.volumeScorePonderated = reader.string();
                    break;
                case 12:
                    message.totalScore = reader.string();
                    break;
                case 13:
                    message.volume = reader.string();
                    break;
                case 14:
                    message.makerVolume = reader.string();
                    break;
                case 15:
                    message.takerVolume = reader.string();
                    break;
                case 16:
                    message.reward = reader.string();
                    break;
                case 17:
                    message.rewardPercentage = reader.string();
                    break;
                case 18:
                    message.qualifies = reader.bool();
                    break;
                case 19:
                    message.volumePercentage = reader.string();
                    break;
                case 20:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
            startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
            depth: isSet(object.depth) ? String(object.depth) : "",
            liquidityScore: isSet(object.liquidityScore) ? String(object.liquidityScore) : "",
            liquidityScorePonderated: isSet(object.liquidityScorePonderated) ? String(object.liquidityScorePonderated) : "",
            uptimeScore: isSet(object.uptimeScore) ? String(object.uptimeScore) : "",
            uptimeScorePonderated: isSet(object.uptimeScorePonderated) ? String(object.uptimeScorePonderated) : "",
            uptimePercentage: isSet(object.uptimePercentage) ? String(object.uptimePercentage) : "",
            volumeScore: isSet(object.volumeScore) ? String(object.volumeScore) : "",
            volumeScorePonderated: isSet(object.volumeScorePonderated) ? String(object.volumeScorePonderated) : "",
            totalScore: isSet(object.totalScore) ? String(object.totalScore) : "",
            volume: isSet(object.volume) ? String(object.volume) : "",
            makerVolume: isSet(object.makerVolume) ? String(object.makerVolume) : "",
            takerVolume: isSet(object.takerVolume) ? String(object.takerVolume) : "",
            reward: isSet(object.reward) ? String(object.reward) : "",
            rewardPercentage: isSet(object.rewardPercentage) ? String(object.rewardPercentage) : "",
            qualifies: isSet(object.qualifies) ? Boolean(object.qualifies) : false,
            volumePercentage: isSet(object.volumePercentage) ? String(object.volumePercentage) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.height !== undefined && (obj.height = message.height);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
        message.startHeight !== undefined && (obj.startHeight = message.startHeight);
        message.depth !== undefined && (obj.depth = message.depth);
        message.liquidityScore !== undefined && (obj.liquidityScore = message.liquidityScore);
        message.liquidityScorePonderated !== undefined && (obj.liquidityScorePonderated = message.liquidityScorePonderated);
        message.uptimeScore !== undefined && (obj.uptimeScore = message.uptimeScore);
        message.uptimeScorePonderated !== undefined && (obj.uptimeScorePonderated = message.uptimeScorePonderated);
        message.uptimePercentage !== undefined && (obj.uptimePercentage = message.uptimePercentage);
        message.volumeScore !== undefined && (obj.volumeScore = message.volumeScore);
        message.volumeScorePonderated !== undefined && (obj.volumeScorePonderated = message.volumeScorePonderated);
        message.totalScore !== undefined && (obj.totalScore = message.totalScore);
        message.volume !== undefined && (obj.volume = message.volume);
        message.makerVolume !== undefined && (obj.makerVolume = message.makerVolume);
        message.takerVolume !== undefined && (obj.takerVolume = message.takerVolume);
        message.reward !== undefined && (obj.reward = message.reward);
        message.rewardPercentage !== undefined && (obj.rewardPercentage = message.rewardPercentage);
        message.qualifies !== undefined && (obj.qualifies = message.qualifies);
        message.volumePercentage !== undefined && (obj.volumePercentage = message.volumePercentage);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return EpochScore.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEpochScore();
        message.epochId = object.epochId ?? "";
        message.accountAddress = object.accountAddress ?? "";
        message.height = object.height ?? "0";
        message.blockTime = object.blockTime ?? undefined;
        message.startHeight = object.startHeight ?? "0";
        message.depth = object.depth ?? "";
        message.liquidityScore = object.liquidityScore ?? "";
        message.liquidityScorePonderated = object.liquidityScorePonderated ?? "";
        message.uptimeScore = object.uptimeScore ?? "";
        message.uptimeScorePonderated = object.uptimeScorePonderated ?? "";
        message.uptimePercentage = object.uptimePercentage ?? "";
        message.volumeScore = object.volumeScore ?? "";
        message.volumeScorePonderated = object.volumeScorePonderated ?? "";
        message.totalScore = object.totalScore ?? "";
        message.volume = object.volume ?? "";
        message.makerVolume = object.makerVolume ?? "";
        message.takerVolume = object.takerVolume ?? "";
        message.reward = object.reward ?? "";
        message.rewardPercentage = object.rewardPercentage ?? "";
        message.qualifies = object.qualifies ?? false;
        message.volumePercentage = object.volumePercentage ?? "";
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};
function createBaseMarketReward() {
    return {
        epochId: "",
        marketId: "",
        height: "0",
        reward: "",
        rewardPercentage: "",
        liquidity: "",
        startDate: undefined,
        endDate: undefined,
        totalScore: "",
        createdAt: undefined,
        updatedAt: undefined,
    };
}
export const MarketReward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.height !== "0") {
            writer.uint32(96).int64(message.height);
        }
        if (message.reward !== "") {
            writer.uint32(26).string(message.reward);
        }
        if (message.rewardPercentage !== "") {
            writer.uint32(34).string(message.rewardPercentage);
        }
        if (message.liquidity !== "") {
            writer.uint32(106).string(message.liquidity);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.totalScore !== "") {
            writer.uint32(74).string(message.totalScore);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 12:
                    message.height = longToString(reader.int64());
                    break;
                case 3:
                    message.reward = reader.string();
                    break;
                case 4:
                    message.rewardPercentage = reader.string();
                    break;
                case 13:
                    message.liquidity = reader.string();
                    break;
                case 5:
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.totalScore = reader.string();
                    break;
                case 10:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            reward: isSet(object.reward) ? String(object.reward) : "",
            rewardPercentage: isSet(object.rewardPercentage) ? String(object.rewardPercentage) : "",
            liquidity: isSet(object.liquidity) ? String(object.liquidity) : "",
            startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
            endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
            totalScore: isSet(object.totalScore) ? String(object.totalScore) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.height !== undefined && (obj.height = message.height);
        message.reward !== undefined && (obj.reward = message.reward);
        message.rewardPercentage !== undefined && (obj.rewardPercentage = message.rewardPercentage);
        message.liquidity !== undefined && (obj.liquidity = message.liquidity);
        message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
        message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
        message.totalScore !== undefined && (obj.totalScore = message.totalScore);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return MarketReward.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMarketReward();
        message.epochId = object.epochId ?? "";
        message.marketId = object.marketId ?? "";
        message.height = object.height ?? "0";
        message.reward = object.reward ?? "";
        message.rewardPercentage = object.rewardPercentage ?? "";
        message.liquidity = object.liquidity ?? "";
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.totalScore = object.totalScore ?? "";
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};
function createBaseEligibleAddress() {
    return { epochId: "", accountAddress: "", height: "0", source: "", createdAt: undefined, updatedAt: undefined };
}
export const EligibleAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.source !== "") {
            writer.uint32(34).string(message.source);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEligibleAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.accountAddress = reader.string();
                    break;
                case 3:
                    message.height = longToString(reader.int64());
                    break;
                case 4:
                    message.source = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            source: isSet(object.source) ? String(object.source) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.height !== undefined && (obj.height = message.height);
        message.source !== undefined && (obj.source = message.source);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return EligibleAddress.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEligibleAddress();
        message.epochId = object.epochId ?? "";
        message.accountAddress = object.accountAddress ?? "";
        message.height = object.height ?? "0";
        message.source = object.source ?? "";
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};
function createBaseRewardDistribution() {
    return {
        epochId: "",
        accountAddress: "",
        height: "0",
        startHeight: "0",
        blockTime: undefined,
        depth: "",
        reward: "",
        createdAt: undefined,
        updatedAt: undefined,
    };
}
export const RewardDistribution = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.startHeight !== "0") {
            writer.uint32(32).int64(message.startHeight);
        }
        if (message.blockTime !== undefined) {
            Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.depth !== "") {
            writer.uint32(50).string(message.depth);
        }
        if (message.reward !== "") {
            writer.uint32(58).string(message.reward);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardDistribution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.accountAddress = reader.string();
                    break;
                case 3:
                    message.height = longToString(reader.int64());
                    break;
                case 4:
                    message.startHeight = longToString(reader.int64());
                    break;
                case 5:
                    message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.depth = reader.string();
                    break;
                case 7:
                    message.reward = reader.string();
                    break;
                case 9:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
            blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
            depth: isSet(object.depth) ? String(object.depth) : "",
            reward: isSet(object.reward) ? String(object.reward) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.height !== undefined && (obj.height = message.height);
        message.startHeight !== undefined && (obj.startHeight = message.startHeight);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
        message.depth !== undefined && (obj.depth = message.depth);
        message.reward !== undefined && (obj.reward = message.reward);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return RewardDistribution.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRewardDistribution();
        message.epochId = object.epochId ?? "";
        message.accountAddress = object.accountAddress ?? "";
        message.height = object.height ?? "0";
        message.startHeight = object.startHeight ?? "0";
        message.blockTime = object.blockTime ?? undefined;
        message.depth = object.depth ?? "";
        message.reward = object.reward ?? "";
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};
function createBaseAccountVolume() {
    return {
        epochId: "",
        accountAddress: "",
        height: "0",
        blockTime: undefined,
        date: "",
        dateTimestamp: undefined,
        volume: "",
        takerVolume: "",
        makerVolume: "",
        volumePercentage: "",
        makerVolumePercentage: "",
        takerVolumePercentage: "",
        dailyVolume: "",
        dailyMakerVolume: "",
        dailyTakerVolume: "",
        dailyVolumePercentage: "",
        dailyMakerVolumePercentage: "",
        dailyTakerVolumePercentage: "",
        dailyQualified: false,
        createdAt: undefined,
        updatedAt: undefined,
    };
}
export const AccountVolume = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochId !== "") {
            writer.uint32(10).string(message.epochId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.blockTime !== undefined) {
            Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.date !== "") {
            writer.uint32(50).string(message.date);
        }
        if (message.dateTimestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.dateTimestamp), writer.uint32(122).fork()).ldelim();
        }
        if (message.volume !== "") {
            writer.uint32(58).string(message.volume);
        }
        if (message.takerVolume !== "") {
            writer.uint32(66).string(message.takerVolume);
        }
        if (message.makerVolume !== "") {
            writer.uint32(74).string(message.makerVolume);
        }
        if (message.volumePercentage !== "") {
            writer.uint32(82).string(message.volumePercentage);
        }
        if (message.makerVolumePercentage !== "") {
            writer.uint32(90).string(message.makerVolumePercentage);
        }
        if (message.takerVolumePercentage !== "") {
            writer.uint32(98).string(message.takerVolumePercentage);
        }
        if (message.dailyVolume !== "") {
            writer.uint32(130).string(message.dailyVolume);
        }
        if (message.dailyMakerVolume !== "") {
            writer.uint32(138).string(message.dailyMakerVolume);
        }
        if (message.dailyTakerVolume !== "") {
            writer.uint32(146).string(message.dailyTakerVolume);
        }
        if (message.dailyVolumePercentage !== "") {
            writer.uint32(154).string(message.dailyVolumePercentage);
        }
        if (message.dailyMakerVolumePercentage !== "") {
            writer.uint32(162).string(message.dailyMakerVolumePercentage);
        }
        if (message.dailyTakerVolumePercentage !== "") {
            writer.uint32(170).string(message.dailyTakerVolumePercentage);
        }
        if (message.dailyQualified === true) {
            writer.uint32(176).bool(message.dailyQualified);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(106).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountVolume();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochId = reader.string();
                    break;
                case 2:
                    message.accountAddress = reader.string();
                    break;
                case 3:
                    message.height = longToString(reader.int64());
                    break;
                case 4:
                    message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.date = reader.string();
                    break;
                case 15:
                    message.dateTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.volume = reader.string();
                    break;
                case 8:
                    message.takerVolume = reader.string();
                    break;
                case 9:
                    message.makerVolume = reader.string();
                    break;
                case 10:
                    message.volumePercentage = reader.string();
                    break;
                case 11:
                    message.makerVolumePercentage = reader.string();
                    break;
                case 12:
                    message.takerVolumePercentage = reader.string();
                    break;
                case 16:
                    message.dailyVolume = reader.string();
                    break;
                case 17:
                    message.dailyMakerVolume = reader.string();
                    break;
                case 18:
                    message.dailyTakerVolume = reader.string();
                    break;
                case 19:
                    message.dailyVolumePercentage = reader.string();
                    break;
                case 20:
                    message.dailyMakerVolumePercentage = reader.string();
                    break;
                case 21:
                    message.dailyTakerVolumePercentage = reader.string();
                    break;
                case 22:
                    message.dailyQualified = reader.bool();
                    break;
                case 13:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochId: isSet(object.epochId) ? String(object.epochId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
            date: isSet(object.date) ? String(object.date) : "",
            dateTimestamp: isSet(object.dateTimestamp) ? fromJsonTimestamp(object.dateTimestamp) : undefined,
            volume: isSet(object.volume) ? String(object.volume) : "",
            takerVolume: isSet(object.takerVolume) ? String(object.takerVolume) : "",
            makerVolume: isSet(object.makerVolume) ? String(object.makerVolume) : "",
            volumePercentage: isSet(object.volumePercentage) ? String(object.volumePercentage) : "",
            makerVolumePercentage: isSet(object.makerVolumePercentage) ? String(object.makerVolumePercentage) : "",
            takerVolumePercentage: isSet(object.takerVolumePercentage) ? String(object.takerVolumePercentage) : "",
            dailyVolume: isSet(object.dailyVolume) ? String(object.dailyVolume) : "",
            dailyMakerVolume: isSet(object.dailyMakerVolume) ? String(object.dailyMakerVolume) : "",
            dailyTakerVolume: isSet(object.dailyTakerVolume) ? String(object.dailyTakerVolume) : "",
            dailyVolumePercentage: isSet(object.dailyVolumePercentage) ? String(object.dailyVolumePercentage) : "",
            dailyMakerVolumePercentage: isSet(object.dailyMakerVolumePercentage)
                ? String(object.dailyMakerVolumePercentage)
                : "",
            dailyTakerVolumePercentage: isSet(object.dailyTakerVolumePercentage)
                ? String(object.dailyTakerVolumePercentage)
                : "",
            dailyQualified: isSet(object.dailyQualified) ? Boolean(object.dailyQualified) : false,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochId !== undefined && (obj.epochId = message.epochId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.height !== undefined && (obj.height = message.height);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
        message.date !== undefined && (obj.date = message.date);
        message.dateTimestamp !== undefined && (obj.dateTimestamp = message.dateTimestamp.toISOString());
        message.volume !== undefined && (obj.volume = message.volume);
        message.takerVolume !== undefined && (obj.takerVolume = message.takerVolume);
        message.makerVolume !== undefined && (obj.makerVolume = message.makerVolume);
        message.volumePercentage !== undefined && (obj.volumePercentage = message.volumePercentage);
        message.makerVolumePercentage !== undefined && (obj.makerVolumePercentage = message.makerVolumePercentage);
        message.takerVolumePercentage !== undefined && (obj.takerVolumePercentage = message.takerVolumePercentage);
        message.dailyVolume !== undefined && (obj.dailyVolume = message.dailyVolume);
        message.dailyMakerVolume !== undefined && (obj.dailyMakerVolume = message.dailyMakerVolume);
        message.dailyTakerVolume !== undefined && (obj.dailyTakerVolume = message.dailyTakerVolume);
        message.dailyVolumePercentage !== undefined && (obj.dailyVolumePercentage = message.dailyVolumePercentage);
        message.dailyMakerVolumePercentage !== undefined &&
            (obj.dailyMakerVolumePercentage = message.dailyMakerVolumePercentage);
        message.dailyTakerVolumePercentage !== undefined &&
            (obj.dailyTakerVolumePercentage = message.dailyTakerVolumePercentage);
        message.dailyQualified !== undefined && (obj.dailyQualified = message.dailyQualified);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return AccountVolume.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAccountVolume();
        message.epochId = object.epochId ?? "";
        message.accountAddress = object.accountAddress ?? "";
        message.height = object.height ?? "0";
        message.blockTime = object.blockTime ?? undefined;
        message.date = object.date ?? "";
        message.dateTimestamp = object.dateTimestamp ?? undefined;
        message.volume = object.volume ?? "";
        message.takerVolume = object.takerVolume ?? "";
        message.makerVolume = object.makerVolume ?? "";
        message.volumePercentage = object.volumePercentage ?? "";
        message.makerVolumePercentage = object.makerVolumePercentage ?? "";
        message.takerVolumePercentage = object.takerVolumePercentage ?? "";
        message.dailyVolume = object.dailyVolume ?? "";
        message.dailyMakerVolume = object.dailyMakerVolume ?? "";
        message.dailyTakerVolume = object.dailyTakerVolume ?? "";
        message.dailyVolumePercentage = object.dailyVolumePercentage ?? "";
        message.dailyMakerVolumePercentage = object.dailyMakerVolumePercentage ?? "";
        message.dailyTakerVolumePercentage = object.dailyTakerVolumePercentage ?? "";
        message.dailyQualified = object.dailyQualified ?? false;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};
export class InjectiveDmmV2RPCClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.GetEpochs = this.GetEpochs.bind(this);
        this.GetTotalScores = this.GetTotalScores.bind(this);
        this.GetTotalScoresHistory = this.GetTotalScoresHistory.bind(this);
        this.GetEpochScores = this.GetEpochScores.bind(this);
        this.GetEpochScoresHistory = this.GetEpochScoresHistory.bind(this);
        this.GetMarketRewards = this.GetMarketRewards.bind(this);
        this.GetEligibleAddresses = this.GetEligibleAddresses.bind(this);
        this.GetRewardsDistribution = this.GetRewardsDistribution.bind(this);
        this.GetAccountVolumes = this.GetAccountVolumes.bind(this);
        this.GetRewardsEligibility = this.GetRewardsEligibility.bind(this);
        this.GetHealthStatus = this.GetHealthStatus.bind(this);
    }
    GetEpochs(request, metadata) {
        return this.rpc.unary(InjectiveDmmV2RPCGetEpochsDesc, GetEpochsRequest.fromPartial(request), metadata);
    }
    GetTotalScores(request, metadata) {
        return this.rpc.unary(InjectiveDmmV2RPCGetTotalScoresDesc, GetTotalScoresRequest.fromPartial(request), metadata);
    }
    GetTotalScoresHistory(request, metadata) {
        return this.rpc.unary(InjectiveDmmV2RPCGetTotalScoresHistoryDesc, GetTotalScoresHistoryRequest.fromPartial(request), metadata);
    }
    GetEpochScores(request, metadata) {
        return this.rpc.unary(InjectiveDmmV2RPCGetEpochScoresDesc, GetEpochScoresRequest.fromPartial(request), metadata);
    }
    GetEpochScoresHistory(request, metadata) {
        return this.rpc.unary(InjectiveDmmV2RPCGetEpochScoresHistoryDesc, GetEpochScoresHistoryRequest.fromPartial(request), metadata);
    }
    GetMarketRewards(request, metadata) {
        return this.rpc.unary(InjectiveDmmV2RPCGetMarketRewardsDesc, GetMarketRewardsRequest.fromPartial(request), metadata);
    }
    GetEligibleAddresses(request, metadata) {
        return this.rpc.unary(InjectiveDmmV2RPCGetEligibleAddressesDesc, GetEligibleAddressesRequest.fromPartial(request), metadata);
    }
    GetRewardsDistribution(request, metadata) {
        return this.rpc.unary(InjectiveDmmV2RPCGetRewardsDistributionDesc, GetRewardsDistributionRequest.fromPartial(request), metadata);
    }
    GetAccountVolumes(request, metadata) {
        return this.rpc.unary(InjectiveDmmV2RPCGetAccountVolumesDesc, GetAccountVolumesRequest.fromPartial(request), metadata);
    }
    GetRewardsEligibility(request, metadata) {
        return this.rpc.unary(InjectiveDmmV2RPCGetRewardsEligibilityDesc, GetRewardsEligibilityRequest.fromPartial(request), metadata);
    }
    GetHealthStatus(request, metadata) {
        return this.rpc.unary(InjectiveDmmV2RPCGetHealthStatusDesc, GetHealthStatusRequest.fromPartial(request), metadata);
    }
}
export const InjectiveDmmV2RPCDesc = { serviceName: "injective_dmm_v2_rpc.InjectiveDmmV2RPC" };
export const InjectiveDmmV2RPCGetEpochsDesc = {
    methodName: "GetEpochs",
    service: InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetEpochsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetEpochsResponse.decode(data);
            return {
                ...value,
                toObject() {
                    return value;
                },
            };
        },
    },
};
export const InjectiveDmmV2RPCGetTotalScoresDesc = {
    methodName: "GetTotalScores",
    service: InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetTotalScoresRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetTotalScoresResponse.decode(data);
            return {
                ...value,
                toObject() {
                    return value;
                },
            };
        },
    },
};
export const InjectiveDmmV2RPCGetTotalScoresHistoryDesc = {
    methodName: "GetTotalScoresHistory",
    service: InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetTotalScoresHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetTotalScoresHistoryResponse.decode(data);
            return {
                ...value,
                toObject() {
                    return value;
                },
            };
        },
    },
};
export const InjectiveDmmV2RPCGetEpochScoresDesc = {
    methodName: "GetEpochScores",
    service: InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetEpochScoresRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetEpochScoresResponse.decode(data);
            return {
                ...value,
                toObject() {
                    return value;
                },
            };
        },
    },
};
export const InjectiveDmmV2RPCGetEpochScoresHistoryDesc = {
    methodName: "GetEpochScoresHistory",
    service: InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetEpochScoresHistoryRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetEpochScoresHistoryResponse.decode(data);
            return {
                ...value,
                toObject() {
                    return value;
                },
            };
        },
    },
};
export const InjectiveDmmV2RPCGetMarketRewardsDesc = {
    methodName: "GetMarketRewards",
    service: InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetMarketRewardsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetMarketRewardsResponse.decode(data);
            return {
                ...value,
                toObject() {
                    return value;
                },
            };
        },
    },
};
export const InjectiveDmmV2RPCGetEligibleAddressesDesc = {
    methodName: "GetEligibleAddresses",
    service: InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetEligibleAddressesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetEligibleAddressesResponse.decode(data);
            return {
                ...value,
                toObject() {
                    return value;
                },
            };
        },
    },
};
export const InjectiveDmmV2RPCGetRewardsDistributionDesc = {
    methodName: "GetRewardsDistribution",
    service: InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetRewardsDistributionRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetRewardsDistributionResponse.decode(data);
            return {
                ...value,
                toObject() {
                    return value;
                },
            };
        },
    },
};
export const InjectiveDmmV2RPCGetAccountVolumesDesc = {
    methodName: "GetAccountVolumes",
    service: InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetAccountVolumesRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetAccountVolumesResponse.decode(data);
            return {
                ...value,
                toObject() {
                    return value;
                },
            };
        },
    },
};
export const InjectiveDmmV2RPCGetRewardsEligibilityDesc = {
    methodName: "GetRewardsEligibility",
    service: InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetRewardsEligibilityRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetRewardsEligibilityResponse.decode(data);
            return {
                ...value,
                toObject() {
                    return value;
                },
            };
        },
    },
};
export const InjectiveDmmV2RPCGetHealthStatusDesc = {
    methodName: "GetHealthStatus",
    service: InjectiveDmmV2RPCDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary() {
            return GetHealthStatusRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary(data) {
            const value = GetHealthStatusResponse.decode(data);
            return {
                ...value,
                toObject() {
                    return value;
                },
            };
        },
    },
};
export class GrpcWebImpl {
    host;
    options;
    constructor(host, options) {
        this.host = host;
        this.options = options;
    }
    unary(methodDesc, _request, metadata) {
        const request = { ..._request, ...methodDesc.requestType };
        const maybeCombinedMetadata = metadata && this.options.metadata
            ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
            : metadata || this.options.metadata;
        return new Promise((resolve, reject) => {
            grpc.unary(methodDesc, {
                request,
                host: this.host,
                metadata: maybeCombinedMetadata,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (response) {
                    if (response.status === grpc.Code.OK) {
                        resolve(response.message.toObject());
                    }
                    else {
                        const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
                        reject(err);
                    }
                },
            });
        });
    }
}
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1_000).toString();
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = Number(t.seconds) * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
export class GrpcWebError extends tsProtoGlobalThis.Error {
    code;
    metadata;
    constructor(message, code, metadata) {
        super(message);
        this.code = code;
        this.metadata = metadata;
    }
}
