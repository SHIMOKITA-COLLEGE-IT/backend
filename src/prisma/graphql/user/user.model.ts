import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SocialLink } from '../social-link/social-link.model';
import { Int } from '@nestjs/graphql';
import { Group } from '../group/group.model';
import { UserRootsTracing } from '../user-roots-tracing/user-roots-tracing.model';
import { UserSkillAcquisition } from '../user-skill-acquisition/user-skill-acquisition.model';
import { Tag } from '../tag/tag.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firebaseAuthUid!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    disabled!: boolean;

    @Field(() => String, {nullable:true})
    imageUrl!: string | null;

    @Field(() => String, {nullable:true})
    username!: string | null;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    nickName!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    showOnlyNickname!: boolean;

    @Field(() => Date, {nullable:false})
    birthday!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    hideAge!: boolean;

    @Field(() => String, {nullable:false})
    position!: string;

    @Field(() => [SocialLink], {nullable:true})
    socialLinks?: Array<SocialLink>;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isAlumni!: boolean;

    /**
     * @Validator.@Min(100)
     * @Validator.@Max(599)
     */
    @Field(() => Int, {nullable:true,description:'@Validator.@Min(100)\n@Validator.@Max(599)'})
    roomNumber!: number | null;

    /**
     * @Validator.@Min(100)
     * @Validator.@Max(599)
     */
    @Field(() => Int, {nullable:true,description:'@Validator.@Min(100)\n@Validator.@Max(599)'})
    postNumber!: number | null;

    @Field(() => [Group], {nullable:true})
    groups?: Array<Group>;

    @Field(() => [UserRootsTracing], {nullable:true})
    roots?: Array<UserRootsTracing>;

    @Field(() => [UserSkillAcquisition], {nullable:true})
    skills?: Array<UserSkillAcquisition>;

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => [String], {nullable:true})
    photoUrls!: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
