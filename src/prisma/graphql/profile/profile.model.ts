import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { SocialLink } from '../social-link/social-link.model';
import { ShimokitaCollegeProfile } from '../shimokita-college-profile/shimokita-college-profile.model';
import { MyRoots } from '../my-roots/my-roots.model';
import { MySkills } from '../my-skills/my-skills.model';
import { Tag } from '../tag/tag.model';
import { Photo } from '../photo/photo.model';
import { ProfileCount } from './profile-count.output';

@ObjectType()
export class Profile {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    username!: string;

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

    @Field(() => ShimokitaCollegeProfile, {nullable:true})
    shimokitaCollegeProfile?: ShimokitaCollegeProfile | null;

    @Field(() => [MyRoots], {nullable:true})
    myRoots?: Array<MyRoots>;

    @Field(() => [MySkills], {nullable:true})
    mySkills?: Array<MySkills>;

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => [Photo], {nullable:true})
    photos?: Array<Photo>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ProfileCount, {nullable:false})
    _count?: ProfileCount;
}
