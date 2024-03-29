"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventTemplatesTS = {
    channelCreate: `// https://abal.moe/Eris/docs/Client#event-channelCreate
import { DMChannel, GuildChannel } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class ChannelCreateEvent extends BaseEvent {
  constructor() {
    super("channelCreate");
  }
  
  async run(client: DiscordClient, channel: DMChannel | GuildChannel) {
    
  }
}`,
    channelDelete: `// https://abal.moe/Eris/docs/Client#event-channelDelete
import { DMChannel, GuildChannel } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class ChannelDeleteEvent extends BaseEvent {
  constructor() {
    super("channelDelete");
  }
  
  async run(client: DiscordClient, channel: DMChannel | GuildChannel) {
    
  }
}
`,
    channelPinsUpdate: `// https://abal.moe/Eris/docs/Client#event-channelPinsUpdate
import { DMChannel, TextChannel } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class ChannelPinsUpdateEvent extends BaseEvent {
  constructor() {
    super("channelPinsUpdate");
  }
  
  async run(client: DiscordClient, channel: DMChannel | TextChannel, time: Date) {
    
  }
}`,
    channelUpdate: `// https://abal.moe/Eris/docs/Client#event-channelUpdate
import { DMChannel, GuildChannel } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class ChannelUpdateEvent extends BaseEvent {
  constructor() {
    super("channelUpdate");
  }
  
  async run(client: DiscordClient, oldChannel: DMChannel | TextChannel, newChannel: DMChannel | TextChannel) {
    
  }
}`,
    debug: `// https://abal.moe/Eris/docs/Client#event-debug
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

  export default class DebugEvent extends BaseEvent {
    constructor() {
      super("debug");
    }
    
    async run(client: DiscordClient, info: string) {
      
    }
  }`,
    emojiCreate: `// https://abal.moe/Eris/docs/Client#event-emojiCreate
import { GuildEmoji } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class EmojiCreateEvent extends BaseEvent {
  constructor() {
    super("emojiCreate");
  }
  
  async run(client: DiscordClient, emoji: GuildEmoji) {
    
  }
}
`,
    emojiDelete: `// https://abal.moe/Eris/docs/Client#event-emojiDelete
import { GuildEmoji } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class EmojiDeleteEvent extends BaseEvent {
  constructor() {
    super("emojiDelete");
  }
  
  async run(client: DiscordClient, emoji: GuildEmoji) {
    
  }
}`,
    emojiUpdate: `// https://abal.moe/Eris/docs/Client#event-emojiUpdate
import { GuildEmoji } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class EmojiUpdateEvent extends BaseEvent {
  constructor() {
    super("emojiUpdate");
  }
  
  async run(client: DiscordClient, oldEmoji: GuildEmoji, newEmoji: GuildEmoji) {
    
  }
}`,
    error: `// https://abal.moe/Eris/docs/Client#event-error
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class ErrorEvent extends BaseEvent {
  constructor() {
    super("error");
  }
  
  async run(client: DiscordClient, error: Error) {
    console.log(error);
  }
}
`,
    guildBanAdd: `// https://abal.moe/Eris/docs/Client#event-guildBanAdd
import { Guild, User } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class GuildBanAddEvent extends BaseEvent {
  constructor() {
    super("guildBanAdd");
  }
  
  async run(client: DiscordClient, guild: Guild, user: User) {
    
  }
}`,
    guildBanRemove: `// https://abal.moe/Eris/docs/Client#event-guildBanRemove
import { Guild, User } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class GuildBanRemoveEvent extends BaseEvent {
  constructor() {
    super("guildBanRemove");
  }
  
  async run(client: DiscordClient, guild: Guild, user: User) {
    
  }
}`,
    guildCreate: `// https://abal.moe/Eris/docs/Client#event-guildCreate
import { Guild } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class GuildCreateEvent extends BaseEvent {
  constructor() {
    super("guildCreate");
  }
  
  async run(client: DiscordClient, guild: Guild) {
    
  }
}`,
    guildDelete: `// https://abal.moe/Eris/docs/Client#event-guildDelete
import { Guild } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class GuildDeleteEvent extends BaseEvent {
  constructor() {
    super("guildDelete");
  }
  
  async run(client: DiscordClient, guild: Guild) {
    
  }
}`,
    guildIntegrationsUpdate: `// https://abal.moe/Eris/docs/Client#event-guildIntegrationsUpdate
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";
import { Guild } from "discord.js";

export default class GuildIntegrationsUpdateEvent extends BaseEvent {
  constructor() {
    super("guildIntegrationsUpdate");
  }
  
  async run(client: DiscordClient, guild: Guild) {
    
  }
}`,
    guildMemberAdd: `// https://abal.moe/Eris/docs/Client#event-guildMemberAdd
import { GuildMember } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super("guildMemberAdd");
  }
  
  async run(client: DiscordClient, member: GuildMember) {
    
  }
}`,
    guildMemberRemove: `// https://abal.moe/Eris/docs/Client#event-guildMemberRemove
import { GuildMember } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super("guildMemberRemove");
  }
  
  async run(client: DiscordClient, member: GuildMember) {
    
  }
}`,
    guildMembersChunk: `// https://abal.moe/Eris/docs/Client#event-guildMembersChunk
import { Snowflake, GuildMember, Guild } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class GuildMembersChunkEvent extends BaseEvent {
  constructor() {
    super("guildMembersChunk");
  }
  
  async run(client: DiscordClient, members: Collection<Snowflake, GuildMember>, guild: Guild) {
    
  }
}`,
    guildMemberSpeaking: `// https://abal.moe/Eris/docs/Client#event-guildMemberSpeaking
import { GuildMember, Speaking } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class GuildMemberSpeakingEvent extends BaseEvent {
  constructor() {
    super("guildMemberSpeaking");
  }
  
  async run(client: DiscordClient, member: GuildMember, speaking: Readonly<Speaking>) {
    
  }
}`,
    guildMemberUpdate: `// https://abal.moe/Eris/docs/Client#event-guildMemberUpdate
import { GuildMember } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class GuildMemberUpdateEvent extends BaseEvent {
  constructor() {
    super("guildMemberUpdate");
  }
  
  async run(client: DiscordClient, oldMember: GuildMember, newMember: GuildMember) {
    
  }
}`,
    guildUnavailable: `// https://abal.moe/Eris/docs/Client#event-guildUnavailable
import { Guild } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class GuildUnavailableEvent extends BaseEvent {
  constructor() {
    super("guildUnavailable");
  }
  
  async run(client: DiscordClient, guild: Guild) {
    
  }
}`,
    guildUpdate: `// https://abal.moe/Eris/docs/Client#event-guildUpdate
import { Guild } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class GuildUpdateEvent extends BaseEvent {
  constructor() {
    super("guildUpdate");
  }
  
  async run(client: DiscordClient, oldGuild: Guild, newGuild: Guild) {
    
  }
}`,
    invalidated: `// https://abal.moe/Eris/docs/Client#event-invalidated
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class InvalidatedEvent extends BaseEvent {
  constructor() {
    super("invalidated");
  }
  
  async run(client: DiscordClient) {
    
  }
}`,
    inviteCreate: `// https://abal.moe/Eris/docs/Client#event-inviteCreate
import { Invite } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class InviteCreateEvent extends BaseEvent {
  constructor() {
    super("inviteCreate");
  }
  
  async run(client: DiscordClient, invite: Invite) {
    
  }
}`,
    inviteDelete: `// https://abal.moe/Eris/docs/Client#event-inviteDelete
import { Invite } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class InviteDeleteEvent extends BaseEvent {
  constructor() {
    super("inviteDelete");
  }
  
  async run(client: DiscordClient, invite: Invite) {
    
  }
}`,
    ready: `// import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class ReadyEvent extends BaseEvent {
  constructor() {
    super("ready");
  }
  
  async run(client: DiscordClient) {
    console.log(client: DiscordClient.user.tag + " has logged in.");
  }
}`,
    message: `// https://abal.moe/Eris/docs/Client#event-message
import { Message } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class MessageEvent extends BaseEvent {
  constructor() {
    super("message");
  }
  
  async run(client: DiscordClient, message: Message) {
    
  }
}`,
    messageDelete: `// https://abal.moe/Eris/docs/Client#event-messageDelete
import { Message } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super("messageDelete");
  }
  
  async run(client: DiscordClient, message: Message) {
    
  }
}`,
    messageDeleteBulk: `// https://abal.moe/Eris/docs/Client#event-messageDeleteBulk
import { Collection, Message, Snowflake } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class MessageDeleteBulkEvent extends BaseEvent {
  constructor() {
    super("messageDeleteBulk");
  }
  
  async run(client: DiscordClient, messages: Collection<Snowflake, Message>) {
    
  }
}`,
    messageReactionAdd: `// https://abal.moe/Eris/docs/Client#event-messageReactionAdd
import { MessageReaction, User } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class MessageReactionAddEvent extends BaseEvent {
  constructor() {
    super("messageReactionAdd");
  }
  
  async run(client: DiscordClient, reaction: MessageReaction, user: User) {
    
  }
}`,
    messageReactionRemove: `// https://abal.moe/Eris/docs/Client#event-messageReactionRemove
import { MessageReaction, User } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class MessageReactionRemoveEvent extends BaseEvent {
  constructor() {
    super("messageReactionRemove");
  }
  
  async run(client: DiscordClient, reaction: MessageReaction, user: User) {
    
  }
}`,
    messageReactionRemoveAll: `// https://abal.moe/Eris/docs/Client#event-messageReactionRemoveAll
import { Message } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class MessageReactionRemoveAllEvent extends BaseEvent {
  constructor() {
    super("ready");
  }
  
  async run(client: DiscordClient, message: Message) {
    
  }
}`,
    messageReactionRemoveEmoji: `// https://abal.moe/Eris/docs/Client#event-messageReactionRemoveEmoji
import { MessageReaction } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class MessageReactionRemoveEmojiEvent extends BaseEvent {
  constructor() {
    super("messageReactionRemoveEmoji");
  }
  
  async run(client: DiscordClient, reaction: MessageReaction) {
    
  }
}`,
    messageUpdate: `// https://abal.moe/Eris/docs/Client#event-messageUpdate
import { Message } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class MessageUpdateEvent extends BaseEvent {
  constructor() {
    super("messageUpdate");
  }
  
  async run(client: DiscordClient, oldMessage: Message, newMessage: Message) {
    
  }
}`,
    presenceUpdate: `// https://abal.moe/Eris/docs/Client#event-presenceUpdate
import { Presence } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class PresenceUpdateEvent extends BaseEvent {
  constructor() {
    super("presenceUpdate");
  }
  
  async run(client: DiscordClient, oldPresence: Presence | null | undefined, newPresence: Presence) {
    
  }
}`,
    rateLimit: `// https://abal.moe/Eris/docs/Client#event-rateLimit
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

interface RateLimitInfo {
  readonly timeout: number;
  readonly limit: number;
  readonly method: string;
  readonly path: string;
  readonly route: string;
}

export default class RateLimitEvent extends BaseEvent {
  constructor() {
    super("rateLimit");
  }
  
  async run(client: DiscordClient, rateLimitInfo: RateLimitInfo) {
    
  }
}`,
    roleCreate: `// https://abal.moe/Eris/docs/Client#event-roleCreate
import { Role } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class RoleCreateEvent extends BaseEvent {
  constructor() {
    super("roleCreate");
  }
  
  async run(client: DiscordClient, role: Role) {
    
  }
}`,
    roleDelete: `// https://abal.moe/Eris/docs/Client#event-roleDelete
import { Role } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class RoleDeleteEvent extends BaseEvent {
  constructor() {
    super("roleDelete");
  }
  
  async run(client: DiscordClient, role: Role) {
    
  }
}`,
    roleUpdate: `// https://abal.moe/Eris/docs/Client#event-roleUpdate
import { Role } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class RoleUpdateEvent extends BaseEvent {
  constructor() {
    super("roleUpdate");
  }
  
  async run(client: DiscordClient, oldRole: Role, newRole: Role) {
    
  }
}`,
    shardDisconnect: `// https://abal.moe/Eris/docs/Client#event-emojiUpdate
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class ShardDisconnectEvent extends BaseEvent {
  constructor() {
    super("shardDisconnect");
  }
  
  async run(client: DiscordClient, event: CloseEvent, id: number) {
    
  }
}`,
    shardError: `// https://abal.moe/Eris/docs/Client#event-shardError
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class ShardErrorEvent extends BaseEvent {
  constructor() {
    super("shardError");
  }
  
  async run(client: DiscordClient, error: Error, shardID: number) {
    
  }
}`,
    shardReady: `// https://abal.moe/Eris/docs/Client#event-emojiUpdate
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class ShardReadyEvent extends BaseEvent {
  constructor() {
    super("shardReady");
  }
  
  async run(client: DiscordClient, id: number, unavailableGuilds?: Set<string>) {
    
  }
}`,
    shardReconnecting: `// https://abal.moe/Eris/docs/Client#event-shardReconnecting
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class ShardReconnectingEvent extends BaseEvent {
  constructor() {
    super("shardReconnecting");
  }
  
  async run(client: DiscordClient, id: number) {
    
  }
}`,
    shardResume: `// https://abal.moe/Eris/docs/Client#event-shardResume
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class ShardResumeEvent extends BaseEvent {
  constructor() {
    super("shardResume");
  }
  
  async run(client: DiscordClient, id: number, replayedEvents: number) {
    
  }
}`,
    typingStart: `// https://abal.moe/Eris/docs/Client#event-typingStart
import { Channel, User } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class TypingStartEvent extends BaseEvent {
  constructor() {
    super("typingStart");
  }
  
  async run(client: DiscordClient, channel: Channel, user: User) {
    
  }
}`,
    userUpdate: `// https://abal.moe/Eris/docs/Client#event-userUpdate
import { User } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class UserUpdateEvent extends BaseEvent {
  constructor() {
    super("userUpdate");
  }
  
  async run(client: DiscordClient, oldUser: User, newUser: User) {
    
  }
}`,
    voiceStateUpdate: `// https://abal.moe/Eris/docs/Client#event-voiceStateUpdate
import { VoiceState } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class VoiceStateUpdateEvent extends BaseEvent {
  constructor() {
    super("voiceStateUpdate");
  }
  
  async run(client: DiscordClient, oldState: VoiceState, newState: VoiceState) {
    
  }
}`,
    warn: `// https://abal.moe/Eris/docs/Client#event-warn
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class WarnEvent extends BaseEvent {
  constructor() {
    super("warn");
  }
  
  async run(client: DiscordClient, info: string) {
    
  }
}`,
    webhookUpdate: `// https://abal.moe/Eris/docs/Client#event-webhookUpdate
import { TextChannel } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

export default class WebhookUpdateEvent extends BaseEvent {
  constructor() {
    super("webhookUpdate");
  }
  
  async run(client: DiscordClient, channel: TextChannel) {
    
  }
}`
};
exports.default = eventTemplatesTS;