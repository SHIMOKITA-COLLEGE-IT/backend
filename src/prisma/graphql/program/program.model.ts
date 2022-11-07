import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ShimokitaCollegeProfile } from '../shimokita-college-profile/shimokita-college-profile.model';
import { ProgramCount } from './program-count.output';

@ObjectType()
export class Program {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    from!: Date | null;

    @Field(() => Date, {nullable:true})
    to!: Date | null;

    @Field(() => [ShimokitaCollegeProfile], {nullable:true})
    shimokitaCollegeProfiles?: Array<ShimokitaCollegeProfile>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ProgramCount, {nullable:false})
    _count?: ProgramCount;
}
