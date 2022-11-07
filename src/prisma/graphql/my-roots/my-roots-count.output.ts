import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MyRootsCount {

    @Field(() => Int, {nullable:false})
    profilesOnSkills?: number;
}
