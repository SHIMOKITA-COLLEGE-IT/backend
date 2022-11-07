import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { Int } from '@nestjs/graphql';
import { Roots } from '../roots/roots.model';
import { MySkills } from '../my-skills/my-skills.model';
import { MyRootsCount } from './my-roots-count.output';

@ObjectType()
export class MyRoots {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Profile, {nullable:false})
    profile?: Profile;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Roots, {nullable:false})
    roots?: Roots;

    @Field(() => Int, {nullable:false})
    rootsId!: number;

    @Field(() => Date, {nullable:true})
    from!: Date | null;

    @Field(() => Date, {nullable:true})
    to!: Date | null;

    @Field(() => [MySkills], {nullable:true})
    profilesOnSkills?: Array<MySkills>;

    @Field(() => MyRootsCount, {nullable:false})
    _count?: MyRootsCount;
}
