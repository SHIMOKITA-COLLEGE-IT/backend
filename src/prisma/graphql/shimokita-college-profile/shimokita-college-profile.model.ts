import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { Int } from '@nestjs/graphql';
import { Program } from '../program/program.model';
import { House } from '../house/house.model';
import { Home } from '../home/home.model';
import { Committee } from '../committee/committee.model';
import { Club } from '../club/club.model';
import { ShimokitaCollegeProfileCount } from './shimokita-college-profile-count.output';

@ObjectType()
export class ShimokitaCollegeProfile {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Profile, {nullable:false})
    profile?: Profile;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isAlumni!: boolean;

    @Field(() => String, {nullable:false})
    slackEmail!: string;

    @Field(() => Int, {nullable:false})
    roomNumber!: number;

    @Field(() => Int, {nullable:false})
    postNumber!: number;

    @Field(() => [Program], {nullable:true})
    programs?: Array<Program>;

    @Field(() => [House], {nullable:true})
    houses?: Array<House>;

    @Field(() => [Home], {nullable:true})
    homes?: Array<Home>;

    @Field(() => [Committee], {nullable:true})
    committee?: Array<Committee>;

    @Field(() => [Club], {nullable:true})
    clubs?: Array<Club>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ShimokitaCollegeProfileCount, {nullable:false})
    _count?: ShimokitaCollegeProfileCount;
}
