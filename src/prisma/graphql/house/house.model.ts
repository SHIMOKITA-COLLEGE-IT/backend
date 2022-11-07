import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Photo } from '../photo/photo.model';
import { ShimokitaCollegeProfile } from '../shimokita-college-profile/shimokita-college-profile.model';
import { HouseCount } from './house-count.output';

@ObjectType()
export class House {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from!: Date | null;

    @Field(() => Date, {nullable:true})
    to!: Date | null;

    @Field(() => [Photo], {nullable:true})
    photos?: Array<Photo>;

    @Field(() => [ShimokitaCollegeProfile], {nullable:true})
    shimokitaCollegeProfiles?: Array<ShimokitaCollegeProfile>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => HouseCount, {nullable:false})
    _count?: HouseCount;
}