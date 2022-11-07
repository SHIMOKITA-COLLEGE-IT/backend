import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { House } from '../house/house.model';
import { Home } from '../home/home.model';
import { Committee } from '../committee/committee.model';
import { Club } from '../club/club.model';
import { PhotoCount } from './photo-count.output';

@ObjectType()
export class Photo {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:false})
    alt!: string;

    @Field(() => [Profile], {nullable:true})
    profiles?: Array<Profile>;

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

    @Field(() => PhotoCount, {nullable:false})
    _count?: PhotoCount;
}
