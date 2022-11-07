import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Photo } from '../photo/photo.model';
import { ShimokitaCollegeProfile } from '../shimokita-college-profile/shimokita-college-profile.model';
import { CoCoCount } from './co-co-count.output';

@ObjectType()
export class CoCo {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    imageUrl!: string | null;

    @Field(() => String, {nullable:true})
    slackChannel!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [Photo], {nullable:true})
    photos?: Array<Photo>;

    @Field(() => [ShimokitaCollegeProfile], {nullable:true})
    shimokitaCollegeProfiles?: Array<ShimokitaCollegeProfile>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => CoCoCount, {nullable:false})
    _count?: CoCoCount;
}
